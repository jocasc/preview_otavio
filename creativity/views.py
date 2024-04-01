from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'creativity/index.html')


def sobre(request):
    return render(request, 'creativity/sobre.html')


def equipa(request):
    return render(request, 'creativity/equipa.html')


def visual(request):
    return render(request, 'creativity/visual.html')


def publicacoes(request):
    return render(request, 'creativity/textos_publicacoes.html')


def etnograficas(request):
    return render(request, 'creativity/textos_notas_etnograficas.html')


def textosdetalhados(request):
    return render(request, 'creativity/textos_detalhes.html')


def agenda(request):
    return render(request, 'creativity/agenda.html')