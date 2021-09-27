from rest_framework import serializers
from .models import *
from django.conf import settings
from difflib import SequenceMatcher
from django.core.cache import cache
from datetime import datetime
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "banner",
            "bio",
            "image",
            "location",
            "website",
        ]
         
class AccountChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
          
            "email",
            "name",
            "username",
        ]
            
class UserSerializer(serializers.ModelSerializer):
    last_seen = serializers.SerializerMethodField()
    online = serializers.SerializerMethodField()
    display_name = serializers.SerializerMethodField(read_only=True)
    followers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    following = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    profile = ProfileSerializer(read_only=True)
    slug = serializers.SlugField(read_only=True)
    # age=serializers.DateField(required=True,format='%Y-%m-%dT%H:%M:%S')
    username=serializers.CharField(required=True)
    class Meta:
        model = User
        fields = [
            #"age",
            "created_at",
            "display_name",
            "email",
            "followers",
            "following",
            "id",
            "name",
            "password",
            "password2",
            "profile",
            "slug",
            "username",
            'last_seen',
             'online',
        ]
    def get_last_seen(self, obj):
        last_seen = cache.get('seen_%s' % obj.username)
        obj.last_seen = last_seen
        return last_seen

    def get_online(self, obj):
        if obj.last_seen:
            now = datetime.datetime.now()
            delta = datetime.timedelta(seconds=settings.USER_ONLINE_TIMEOUT)
            if now > obj.last_seen + delta:
                return False
            else:
                return True
        else:
            return False
#validation function to to validate password fields,username...
    def validate(self, data):
        password = data.get("password")
        password2 = data.get("password2")
        username = data.get("username")
        email = data.get("email")
        max_similarity = 0.7
        if SequenceMatcher(a=password.lower(), b=username.lower()).quick_ratio() > max_similarity:
            raise serializers.ValidationError(
                {"password": "The password is too similar to the username."},)
        if SequenceMatcher(a=password.lower(), b=email.lower()).quick_ratio() > max_similarity:
            raise serializers.ValidationError(
                {"password":"The password is too similar to the email."},)
        if password and password2 and password != password2:
            raise serializers.ValidationError(
                {
                    "password2": "Passwords do not match.",
                }
            )
        if User.objects.filter(username=username).exists():
    
             raise serializers.ValidationError(
                {"username":"User with that username already exists."},)          
        if not any (char.isdigit() for char in password):
               raise serializers.ValidationError(
                   {
                       "password": "Include numbers in your password",
                   }
               )
           
        if len(password) < 8:
            raise serializers.ValidationError(
                {
                    "password": "This password is too short. It must contain at least 8 characters.",
                }
            )   
        return super(UserSerializer, self).validate(data)
    def create(self, validated_data):
        del validated_data["password2"]
        return User.objects.create_user(**validated_data)

    def get_display_name(self, obj):
        return obj.display_name()


class PasswordSerializer( serializers.ModelSerializer):
   
    current_password = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "current_password",
            "password",
            "password2",
        ]

    def validate_current_password(self, data):
        request = self.context.get("request")
        r_user = request.user
        if not r_user.check_password(data):
            raise serializers.ValidationError("Password does not match any on our records.")
        return data
