from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views import generic
from .models import BlogPost

class BlogPostListView(LoginRequiredMixin, generic.ListView):
    model = BlogPost
