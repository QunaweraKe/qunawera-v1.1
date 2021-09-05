from .signals import signal_viewed


class obj_mixin(object):
    def get_context_data(self,*args,**kwargs):
        context=super(obj_mixin,self).get_context_data(*args,**kwargs)
        request=self.request
        instance=context.get('object')
        if instance:
           signal_viewed.send(instance.__class__,instance=instance,request=request)
        return context