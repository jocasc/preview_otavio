from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'creativity/index.html')


def sobre(request):
    return render(request, 'creativity/sobre.html')


def equipa(request):
    return render(request, 'creativity/equipa.html')