from django.urls import path
from . import  views

app_name = "company"


urlpatterns = [
  path("contactus/", views.ContactUsView.as_view(), name="contactus"),
  path("team/", views.TeamView.as_view(), name="team"),
]