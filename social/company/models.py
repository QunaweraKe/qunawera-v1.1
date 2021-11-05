from django.db import models
from django.contrib.auth import  get_user_model
#Key Qunawera Information resides here
# Create your models here.


#contact us,feedback
#careers
#Team from CEO ,MD,ETC
User = get_user_model()
class Careers(models.Model):
    Job_title=models.CharField(max_length=150)
    Description=models.TextField()
    Roles=models.TextField()
    Skills=models.TextField()
    Status=models.BooleanField(default=True)
    Location=models.CharField(max_length=150)
    Expected_salary=models.IntegerField(null=True,blank=True)
    
    class Meta:
        verbose_name_plural="Careers"
class Team(models.Model):
    Job_title=models.CharField(max_length=150)
    About=models.TextField()
    Roles=models.TextField()
    Skills=models.TextField()
    Status=models.BooleanField(default=True)
    Image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
    


    class Meta:
        verbose_name_plural="Teams"


class  ContactUs(models.Model):
       title =models.CharField(max_length=150)
       email=models.EmailField(max_length=255)
       description=models.TextField(blank=False,max_length=250)
       date_created=models.DateTimeField(auto_now_add=True,db_index=True,)
       Screenshot=models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
        
       def __str__(self):
           return self.title

       class Meta:
        verbose_name_plural="Contact Us"

class  Feedback(models.Model):
       stars=(
           (1,'one'),
             (2,'two'),
               (1,'three'),
                 (1,'four'),
                   (1,'five')
       )
       rater = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE
    )
       feedback_comment=models.TextField(blank=False,max_length=250)
       rating=models.PositiveSmallIntegerField(choices=stars)
        

       class Meta:
        verbose_name_plural="Feedbacks"