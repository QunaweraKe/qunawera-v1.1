from django.contrib.humanize.templatetags import humanize
from django.db import models
from .signals import signal_viewed
from  django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import  get_user_model
User = get_user_model()
from .utils import get_client_ip
from django.contrib.sessions.models import Session
from django.db.models.signals import pre_save,post_save
from users.signals import logged_in
class Viewed (models.Model):
    user=models.ForeignKey('users.User',on_delete=models.CASCADE)
    content_type=models.ForeignKey('contenttypes.ContentType',on_delete=models.CASCADE)
    obj_id=models.PositiveIntegerField()
    get_object=GenericForeignKey('content_type','obj_id')
    time_viewed=models.DateTimeField(auto_now_add=True)
    ip_address=models.CharField(max_length=150,blank=True,null=True)

    def __str__(self):
 
        return "%s     viewed %s   on %s" %(self.user,self.get_object,self.time_viewed)
    class Meta:
        ordering=['-time_viewed']
        verbose_name='Viewed Item'
        verbose_name_plural='Viewed '

class UserSession(models.Model):
    user=models.ForeignKey('users.User',on_delete=models.CASCADE)
    session_key=models.CharField(max_length=100,null=True)
    time_loggedin=models.DateTimeField(auto_now_add=True)
    ip_address=models.CharField(max_length=250,blank=True,null=True)
    is_active=models.BooleanField(default=True)
    in_active=models.BooleanField(default=False)
    
    def time_logged_in(self):
        return humanize.naturaltime(self.time_loggedin)
   

    
    def end_session(self):
        session_key=self.session_key
        in_active=self.in_active
        try:
            Session.objects.get(pk=session_key).delete()
            self.is_active=False
            self.in_active=True
            self.save()
        except:
            pass
        return self.in_active

def post_save_session_receiver(sender,instance,created,*args,**kwargs)  :
    if created:
        qs= UserSession.objects.filter(user=instance.user,is_active=False,in_active=True).exclude(id=instance.id)
        for i in qs:
            i.end_session()
    if not instance.is_active and not instance.in_active:
        instance.end_session()
post_save.connect( post_save_session_receiver,sender=UserSession)






def obj_viewed_receiver(sender,instance,request,*args,**kwargs):
    c_type=ContentType.objects.get_for_model(sender)
 
    Viewed.objects.create(
        user=request.user,  
        obj_id=instance.id,
        content_type=c_type,
        ip_address=get_client_ip
    )
signal_viewed.connect(obj_viewed_receiver)

def loggedin_receiver(sender,instance,request,*args,**kwargs):
    user=instance
    session_key=request.session.session_key,
    ip_address=get_client_ip
    UserSession.objects.create(
        user=user,
         ip_address=ip_address,
        session_key=session_key,
      
    )
logged_in.connect(loggedin_receiver)