from django.shortcuts import render


def home(request):
    return render(
        request,
        'portfolio/home.html',
        context={}
    )

def about(request):
    return render(
        request,
        'portfolio/about.html',
        context={}
    )

def contact(request):
    return render(
        request,
        'portfolio/contact.html',
        context={}
    )

def tribute(request):
    return render(
        request,
        'portfolio/tribute.html',
        context={}
    )

def projects(request):
    return render(
        request,
        'portfolio/projects.html',
        context={}
    )

def weather(request):
    return render(
        request,
        'portfolio/weather.html',
        context={}
    )

def randomquote(request):
    return render(
        request,
        'portfolio/randomquote.html',
        context={}
    )

def wikiviewer(request):
    return render(
        request,
        'portfolio/wikiviewer.html',
        context={}
    )


def twitch(request):
    return render(
        request,
        'portfolio/twitch.html',
        context={}
    )

def tictactoe(request):
    return render(
        request,
        'portfolio/tictactoe.html',
        context={}
    )

def react(request):
    return render(
        request,
        'portfolio/react.html',
        context={}
    )
