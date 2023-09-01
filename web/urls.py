from . import views
from django.urls import path


app_name='web'

urlpatterns = [
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('service/',views.service,name='service'),
    path('service_detail/<int:id>/',views.service_detail,name='service_detail'),
    path('blog/',views.blog,name='blog'),
    path('blog_detail/<int:id>/',views.blog_detail,name='blog_detail'),
    path('contact/',views.contact,name='contact'),

]