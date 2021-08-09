from django.contrib import admin
from .models import *
# Register your models here.


class CareerAdmin (admin.ModelAdmin):
    model=Careers
    list_display=('Job_title','Description','Roles','Skills','Status','Location','Expected_salary')
admin.site.register(Careers,CareerAdmin)


class TeamAdmin (admin.ModelAdmin):
    model=Team
    list_display=('Job_title','About','Roles','Skills','Status','Image')
admin.site.register(Team,TeamAdmin)



class ContactUsAdmin(admin.ModelAdmin):
    model=ContactUs
    list_display=('email','description','date_created')
admin.site.register(ContactUs,ContactUsAdmin)