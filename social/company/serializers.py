from rest_framework import serializers
from .models import *





class  ContactUsSerializer(serializers.ModelSerializer):
    """Create post for contact us. """

    class Meta:
        model=ContactUs
        fields =[
            "email",
            "description",
            "date_created"
        ]