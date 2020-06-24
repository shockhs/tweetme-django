from django.urls import path

from .views import (home_view, tweet_action_view, tweet_create_view,
                    tweet_delete_view, tweet_list_view, tweet_view)

# BASE ENDPOINT API API/TWEETS/


urlpatterns = [
    path('', tweet_list_view, name='tweet'),
    path('action/', tweet_action_view, name='action-tweet'),
    path('create/', tweet_create_view, name='create-tweet'),
    path('<int:tweet_id>/', tweet_view, name='tweet'),
    path('<int:tweet_id>/delete/', tweet_delete_view, name='delete-tweet'),
]
