from django.conf.urls import url
from django.contrib import admin

from .views import *

urlpatterns = [
    url(r'^$', home),
    url(r'^htmlviewer$', codeplay),
]
