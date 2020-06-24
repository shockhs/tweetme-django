# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import random

from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import Http404, HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.utils.http import is_safe_url
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Profile
from ..serializers import PublicProfileSerializer

ALLOWED_HOSTS = settings.ALLOWED_HOSTS


User = get_user_model()


@api_view(['GET','POST']) 
def profile_detail_api_view(request, username, *args, **kwargs):
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return Response({'detail':'Пользователь не найден'}, status=404)
    profile_obj = qs.first()
    data = request.data or {}
    if request.method == 'POST':
        current_user = request.user
        action = data.get('action')
        if profile_obj.user != request.user:
            if action == 'follow':
                profile_obj.followers.add(current_user)
            elif action == 'unfollow':
                profile_obj.followers.remove(current_user)
            else: 
                pass
    serializer = PublicProfileSerializer(instance = profile_obj,context={'request':request})
    return Response(serializer.data, status=200)
