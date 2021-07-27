from rest_framework import serializers

from .models import Profile, User,ContactUs



class  ContactUsSerializer(serializers.ModelSerializer):
    """Create post for contact us. """

    class Meta:
        model=ContactUs
        fields =[
            "email",
            "description",
            "date_created"
        ]
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

class ValidateUserNameMixin:
    def validate(self, data):
        username = data.get("username")
        
        if '@' in username or '-' in username or '/' in username or '&' in username :
             raise serializers.ValidationError(
                {
                    "username": "Character cannot be used as a username",
                }
            )
        return data



class ValidatePasswordMixin:
    def validate(self, data):
        password = data.get("password")
        password2 = data.get("password2")
        if password and password2 and password != password2:
            raise serializers.ValidationError(
                {
                    "password2": "Passwords do not match.",
                }
            )
                         
        if not any (char.isdigit() for char in password):
               raise serializers.ValidationError(
                   {
                       "password": "Include numbers in your password",
                   }
               )
           
        if len(password) < 8:
            raise serializers.ValidationError(
                {
                    "password": "Password must be atleast 8 characters long",
                }
            )   
        return data


class UserSerializer(ValidatePasswordMixin,ValidateUserNameMixin, serializers.ModelSerializer):

    display_name = serializers.SerializerMethodField(read_only=True)
    followers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    following = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    profile = ProfileSerializer(read_only=True)
    slug = serializers.SlugField(read_only=True)

    class Meta:
        model = User
        fields = [
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
        ]

    def create(self, validated_data):
        del validated_data["password2"]
        return User.objects.create_user(**validated_data)

    def get_display_name(self, obj):
        return obj.display_name()


class PasswordSerializer(ValidatePasswordMixin, serializers.ModelSerializer):
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
