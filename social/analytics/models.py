from django.db import models

# Create your models here.
from  django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import  get_user_model
User = get_user_model()


class Viewed (models.Model):
    user=models.ForeignKey('users.User',on_delete=models.CASCADE)
    content_type=models.ForeignKey(ContentType,on_delete=models.CASCADE)
    obj_id=models.PositiveIntegerField()
    get_object=GenericForeignKey('content_type','obj_id')
    time_viewed=models.DateTimeField(auto_now_add=True)



    def __str__(self):
 
        return "%s     viewed %s   on %s" %(self.user,self.content_type,self.time_viewed)
    class Meta:
        ordering=['-time_viewed']
        verbose_name='Viewed Item'
        verbose_name_plural='Viewed Items'