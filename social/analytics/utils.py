def get_client_ip(request):
    x_forwarded_for=request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip_add=x_forwarded_for.split(",")[0]
    else :
        ip_add=request.META.get("REMOTE_ADDR",None)
    return ip_add