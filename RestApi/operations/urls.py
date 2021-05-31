from django.conf.urls import url 
from tutorials import views

urlpatterns = [
    url(r'^api/operations$', view.operation_list),
    url(r'^api/operations/(?P<pk>[0-9]+)$', views.operation_detail)
]