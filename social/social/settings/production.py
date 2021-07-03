import os

from .base import *  # noqa

ALLOWED_HOSTS = os.environ["ALLOWED_HOSTS"].split(";")

#Security techniques

'''
#TO BE USED IN DEPLOYMENT
#1.SSL REDIRECT
SECURE_SSL_REDIRECT = True
#2.cross site scripting
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True

#3.HTTP strict transport  security
SECURE_HSTS_SECONDS = 86400 # Equivalent to 1 day
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True

#4.CSRF security
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
'''
