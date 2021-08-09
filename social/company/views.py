
from rest_framework import generics as rest_generics, status

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .serializers import ContactUsSerializer

# Create your views here.
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


