from django.urls import path
from creativity.views import index, sobre

urlpatterns = [
    path('', index, name='index'),
    path('sobre/', sobre, name='sobre')
]
