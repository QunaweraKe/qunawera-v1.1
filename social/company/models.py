from django.db import models

#Key Qunawera Information resides here
# Create your models here.


#contact us
#careers
#Team from CEO ,MD,ETC

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