from django.db import models
from .signals import signal_viewed
from  django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import  get_user_model
User = get_user_model()
from .utils import get_client_ip

class Viewed (models.Model):
    user=models.ForeignKey('users.User',on_delete=models.CASCADE)
    content_type=models.ForeignKey(ContentType,on_delete=models.CASCADE)
    obj_id=models.PositiveIntegerField()
    get_object=GenericForeignKey('content_type','obj_id')
    time_viewed=models.DateTimeField(auto_now_add=True)
    ip_address=models.CharField(max_length=150,blank=True,null=True)

    def __str__(self):
 
        return "%s     viewed %s   on %s" %(self.user,self.content_type,self.time_viewed)
    class Meta:
        ordering=['-time_viewed']
        verbose_name='Viewed Item'
        verbose_name_plural='Viewed '

def obj_viewed_receiver(sender,instance,request,*args,**kwargs):
    c_type=ContentType.objects.get_for_model(sender)
 
    Viewed.objects.create(
        user=request.user,  
        obj_id=instance.id,
        content_type=c_type,
        ip_address=get_client_ip
    )
signal_viewed.connect(obj_viewed_receiver)