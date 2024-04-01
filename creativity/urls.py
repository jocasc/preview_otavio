from django.urls import path
from creativity.views import index, sobre, equipa, visual, publicacoes, etnograficas, textosdetalhados, agenda, fazparte

urlpatterns = [
    path('', index, name='index'),
    path('sobre/', sobre, name='sobre'),
    path('equipa/', equipa, name='equipa'),
    path('visual/', visual, name='visual'),
    path('publicacoes/', publicacoes, name='publicacoes'),
    path('etnograficas/', etnograficas, name='etnograficas'),
    path('texto-detalhado/', textosdetalhados, name='textosdetalhados'),
    path('agenda/', agenda, name='agenda'),
    path('fazparte/', fazparte, name='fazparte')

]
