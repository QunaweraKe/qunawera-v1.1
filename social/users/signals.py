from django.db.models.signals import post_save
from django.dispatch import receiver,Signal

from .models import Profile


@receiver(post_save, sender="users.User")
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)




logged_in=Signal(providing_args=['instance','request'])