# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import random

from django.conf import settings
from django.contrib.auth import logout
from django.shortcuts import redirect, render


def home_view(request, *args, **kwargs):
    return render(request, 'pages/feed.html')


def tweets_list_view(request, *args, **kwargs):
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    return render(request, 'tweets/list.html',context={'profile_username':username})

def tweets_detail_view(request, tweetId, *args, **kwargs):
    return render(request, 'tweets/detail.html',context={'tweetId':tweetId},status=200)

def tweet_logout(request, *args, **kwargs):
    logout(request.user) 
    return render(request, 'tweets/list.html',context={}) 
