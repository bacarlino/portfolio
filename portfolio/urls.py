from django.conf.urls import url # url(regex, template, name=<name>)
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="portfolio/home.html"), name='home'),

    url(r'^about/$', TemplateView.as_view(template_name="portfolio/about.html"), name='about'),

    url(r'^contact/$', TemplateView.as_view(template_name="portfolio/contact.html"), name='contact'),

    url(r'^projects/$', TemplateView.as_view(template_name="portfolio/projects.html"), name='projects'),

    url(r'^tribute/$', TemplateView.as_view(template_name="portfolio/tribute.html"), name='tribute'),

    url(r'^weather/$', TemplateView.as_view(template_name="portfolio/weather.html"), name='weather'),

    url(r'^randomquote/$', TemplateView.as_view(template_name="portfolio/randomquote.html"), name='randomquote'),

    url(r'^wikiviewer/$', TemplateView.as_view(template_name="portfolio/wikiviewer.html"), name='wikiviewer'),

    url(r'^twitch/$', TemplateView.as_view(template_name="portfolio/twitch.html"), name='twitch'),

    url(r'^tictactoe/$', TemplateView.as_view(template_name="portfolio/tictactoe.html"), name='tictactoe'),

    url(r'^react/simon', TemplateView.as_view(template_name="portfolio/react.html"), name='simon'),

    url(r'^react/pomodoro', TemplateView.as_view(template_name="portfolio/react.html"), name='clock'),

    url(r'^react/calculator', TemplateView.as_view(template_name="portfolio/react.html"), name='calc'),
]
