# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIClient

from .models import Tweet

User = get_user_model()

class TweetTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='abc',
                password='somepassword')
        self.userCheck = User.objects.create_user(username='def',
                password='somepassword2')
        tweet_obj = Tweet.objects.create(content='Testing setup#1 tweet',
                user=self.user)
        tweet_obj = Tweet.objects.create(content='Testing setup#2 tweet',
                user=self.user)
        tweet_obj = Tweet.objects.create(content='Testing setup#3 tweet',
                user=self.userCheck)
        self.current_count = Tweet.objects.all().count()
                            

    def test_tweet_created(self):
        tweet_obj = Tweet.objects.create(content='Testing tweet',
                user=self.user)
        self.assertEqual(tweet_obj.id,4)
        self.assertEqual(tweet_obj.user,self.user)

    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password = 'somepassword')
        return client


    def test_tweets_relate_name(self):
        user = self.user
        self.assertEqual(user.tweets.count(),2)


    def test_tweet_list(self):
        client = self.get_client()
        response = client.get('/api/tweets/')
        self.assertEqual(response.status_code,200)
        self.assertEqual(len(response.json()),3)

    def test_action_like(self):
        client = self.get_client()
        response = client.post('/api/tweets/action/',
            {'id':2, 'action':'like'})
        like_count = response.json().get('likes')
        user = self.user
        like_instances_count = user.tweetlike_set.count()
        related_likes_count = user.tweet_user.count()
        self.assertEqual(response.status_code,200)
        self.assertEqual(like_count,1)
        self.assertEqual(like_instances_count,1)
        self.assertEqual(related_likes_count,like_instances_count)
    
    def test_action_unlike(self):
        client = self.get_client()
        response = client.post('/api/tweets/action/',
            {'id':3, 'action':'like'})
        self.assertEqual(response.status_code,200)
        response = client.post('/api/tweets/action/',
            {'id':3, 'action':'unlike'})
        self.assertEqual(response.status_code,200)
        like_count = response.json().get('likes')
        self.assertEqual(like_count,0)
    
    def test_action_retweet(self):
        client = self.get_client()
        current_count = self.current_count
        response = client.post('/api/tweets/action/',
            {'id':2, 'action':'retweet'})
        self.assertEqual(response.status_code,201)
        data = response.json()
        new_tweet_id = data.get('id')
        self.assertNotEqual(2, new_tweet_id)
        self.assertEqual(current_count+1,new_tweet_id)

    def test_tweet_create_api_view(self):
        request_data = {"content": "Test tweet #5"}
        client = self.get_client()
        response = client.post('/api/tweets/create/',request_data)
        response_data = response.json()
        new_tweet_id = response_data.get('id')
        self.assertEqual(self.current_count+1,new_tweet_id)

    def test_tweet_detail_api_view(self):
        client = self.get_client()
        response = client.get('/api/tweets/2/')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data.get('id'), 2)
    
    def test_tweet_delete_api_view(self):
        client = self.get_client()
        response = client.delete('/api/tweets/2/delete/')
        self.assertEqual(response.status_code, 200)
        client = self.get_client()
        response = client.delete('/api/tweets/2/delete/')
        self.assertEqual(response.status_code, 404)
        response_incorret_owner = client.delete('/api/tweets/3/delete/')
        self.assertEqual(response_incorret_owner.status_code, 401)
