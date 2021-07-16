from django.contrib import admin
from .models import *


class UserAdmin (admin.ModelAdmin):
    list_display = ('name','email')
admin.site.register(User,UserAdmin)


@admin.register(ContactUs)
class ContactUsAdmin(admin.ModelAdmin):
    list_display=('email','description','date_created')