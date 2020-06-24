from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from accounts.views import login_view, logout_view, register_view
from tweets.views import (home_view, tweet_logout, tweets_detail_view,
                          tweets_list_view)

urlpatterns = [
    path('',home_view),
    path('admin/', admin.site.urls),
    path('global/', tweets_list_view, name='home'),
    path('login/', login_view, name='home'),
    path('logout/', logout_view, name='home'),
    path('register/', register_view, name='home'),
    path('<int:tweetId>/', tweets_detail_view, name='tweetDetail'),
    re_path(r'profiles?/', include('profiles.urls')),
    path('react/', TemplateView.as_view(template_name='react_to_django.html')),
    path('api/tweets/', include('tweets.api.urls')),
    re_path(r'api/profiles?/', include('profiles.api.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, 
                    document_root=settings.STATIC_ROOT)
