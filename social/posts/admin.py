from django.contrib import admin
from .models import *






class PostAdmin(admin.StackedInline):
    model=Post
    

class PostsAdmin(admin.ModelAdmin):
    inlines=[PostAdmin]