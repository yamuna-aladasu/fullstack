from django.urls import path

from .views import register, signin

urlpatterns = [

    path("register/", register),

    path("signin/", signin),
]