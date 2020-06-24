from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIClient

from .models import Profile

User = get_user_model()

class ProfileTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='abc',
                password='somepassword')
        self.userCheck = User.objects.create_user(username='def',
                password='somepassword2')

    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password = 'somepassword')
        return client

    def test_follow_api_endpoint(self):
        client = self.get_client()
        response_follow = client.post(
            f'/api/profiles/{self.userCheck.username}/follow',
            {'action':'follow'}
        )
        response_unfollow = client.post(
            f'/api/profiles/{self.userCheck.username}/follow',
            {'action':'unfollow'}
        )
        data_f = response_follow.json()
        data_u = response_unfollow.json()
        count_f = data_f.get('followers')
        count_u = data_u.get('followers')
        self.assertEqual(response_follow.status_code,200)
        self.assertEqual(response_unfollow.status_code,200)
        self.assertEqual(count_f,1)
        self.assertEqual(count_u,0)

    def test_username_follow_api_endpoint(self):
        client = self.get_client()
        response_follow = client.post(
            f'/api/profiles/{self.user.username}/follow',
            {'action':'follow'}
        )
        data_f = response_follow.json()
        count_f = data_f.get('followers')
        self.assertEqual(response_follow.status_code,200)
        self.assertEqual(count_f,0)
        
    def test_profile_created_via_signal(self):
        qs = Profile.objects.all()
        self.assertEqual(qs.count(),2)

    def test_following(self):
        first  = self.user
        second = self.userCheck
        first.profile.followers.add(second)
        second_user_following_whom = second.following.all()
        qs = second_user_following_whom.filter(user=first)
        first_user_following_no_one = first.following.all()
        self.assertTrue(qs.exists())
        self.assertFalse(first_user_following_no_one.exists())
