"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import RedirectView
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from blog import views as blog_views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', RedirectView.as_view(url='/portfolio/', permanent=True)),
    url(r'^portfolio/', include('portfolio.urls')),
    url(r'^blog/', include('blog.urls')),
    url(r'^accounts/', include('django.contrib.auth.urls')),
    url(r'^accounts/signup/$', blog_views.signup, name='signup'),
    url(r'^accounts/register/$', blog_views.register, name='register'), 

    # url(r'^accounts/signup/$', CreateView.as_view(template_name='registration/signup.html', form_class=UserCreationForm, success_url='/blog/')),

] + static(settings.STATIC_URL, document_root=settings.STATIC_URL)
