from django.conf.urls import url # url(regex, template, name=<name>)
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^$', views.BlogPostListView.as_view(), name='blog_home'),
    url(r'^newblogpost/$', views.new_blog_post, name='new_blog_post')
]
