from django.conf.urls import url 
from operations import views

urlpatterns = [
    url(r'^api/operations$', views.operation_list),
    url(r'^api/operations/(?P<pk>[0-9]+)$', views.operation_detail)
]