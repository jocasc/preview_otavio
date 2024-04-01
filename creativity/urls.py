from django.urls import path
from creativity.views import index, sobre, equipa, visual, publicacoes

urlpatterns = [
    path('', index, name='index'),
    path('sobre/', sobre, name='sobre'),
    path('equipa/', equipa, name='equipa'),
    path('visual/', visual, name='visual'),
    path('publicacoes/', publicacoes, name='publicacoes')
]
