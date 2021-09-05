from django.dispatch import Signal


signal_viewed=Signal(providing_args=['instance','request'])