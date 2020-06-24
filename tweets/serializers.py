from django.conf import settings
from rest_framework import serializers

from profiles.serializers import PublicProfileSerializer

from .models import Tweet


class TweetActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank = True, required=False)


    def validate_action(self,value):
        value = value.lower().strip()
        if not value in settings.TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError('Это действие не включено в перечень возможных')
        return value

class TweetCreateSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Tweet
        fields = [
            'user',
            'id',
            'content',
            'likes',
            'timestamp'
        ]

    def get_likes(self,obj):
        return obj.likes.count()

    def validate_content(self,value):
        if len(value) > settings.MAX_TWEET_LENGTH:
            raise serializers.ValidationError('Слишком длинный твит')
        return value


    
class TweetSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    parent = TweetCreateSerializer(read_only=True)
    class Meta:
        model = Tweet
        fields = [
                'user',
                'id',
                'content',
                'likes',
                'is_retweet',
                'parent',
                'timestamp'
        ]

    def get_likes(self,obj):
        return obj.likes.count()
