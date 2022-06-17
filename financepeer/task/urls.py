from django.conf.urls import url
from task import views

urlpatterns=[
    url(r'^viewdata',views.employeeApi),
    url(r'^viewdata/([0-9]+)$',views.employeeApi),
    url(r'^upload',views.uploadApi)
    ]
