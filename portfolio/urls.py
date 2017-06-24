from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^about/$', views.about, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^projects/$', views.projects, name='projects'),
    url(r'^tribute/$', views.tribute, name='tribute'),
    url(r'^weather/$', views.weather, name='weather'),
    url(r'^randomquote/$', views.randomquote, name='randomquote'),
    url(r'^wikiviewer/$', views.wikiviewer, name='wikiviewer'),
    url(r'^twitch/$', views.twitch, name='twitch'),
    url(r'^tictactoe/$', views.tictactoe, name='tictactoe'),
    # url(r'^react/', views.react, name='react'),
    url(r'^react/simon', views.react, name='simon'),
    url(r'^react/pomodoro', views.react, name='clock'),
    url(r'^react/calculator', views.react, name='calc'),
]
