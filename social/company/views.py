
from rest_framework import generics as rest_generics, status

from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from . models import Team

from .serializers import ContactUsSerializer,TeamSerializer

class ContactUsView (rest_generics.CreateAPIView):
     permission_classes = [IsAuthenticated]
     serializer_class = ContactUsSerializer
    
     def post(self, request):
         serializer = ContactUsSerializer(data=request.data)
         if serializer.is_valid():
             serializer.save()
             return Response(serializer.data,status=status.HTTP_201_CREATED)
         else:

             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TeamView (rest_generics.ListAPIView):
     permission_classes = [AllowAny]
     serializer_class = TeamSerializer
     queryset=Team.objects.all()
