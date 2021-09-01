from rest_framework import serializers
from .models import *





class  ContactUsSerializer(serializers.ModelSerializer):
    """Create post for contact us. """
    
    class Meta:
        model=ContactUs
        fields =(
            "email",
            "description",
            "title",
            "Screenshot"
        )

    def create(self, validated_data):
        contact=ContactUs.objects.create(
            email=validated_data['email'],
            description=validated_data['description'],
            title=validated_data['title'],
            Screenshot=validated_data['Screenshot'],
        )
        return contact
class  TeamSerializer(serializers.ModelSerializer):
   

    class Meta:
        model=Team
        fields =[
            "Job_title",
            "About",
            "Roles",
            "Skills",
            "Image",

        ]