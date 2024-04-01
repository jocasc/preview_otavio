from django.urls import path
from creativity.views import index, sobre, equipa, visual

urlpatterns = [
    path('', index, name='index'),
    path('sobre/', sobre, name='sobre'),
    path('equipa/', equipa, name='equipa'),
    path('visual/', visual, name='visual')
]
