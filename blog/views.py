from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.views import generic
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from .models import BlogPost
from .forms import NewBlogPost, UserForm, SignupForm
import datetime


class BlogPostListView(generic.ListView):
    model = BlogPost

@login_required
def new_blog_post(request):
    """
    View for creating a new blog entry
    """
    # POST when user submits form
    if request.method == 'POST':

        # Instantiate the form with the POST data
        form = NewBlogPost(request.POST)
        if form.is_valid():

            # Create the new post using cleaned form data
            new_post = BlogPost(
                title=form.cleaned_data['title'],
                body=form.cleaned_data['body'],
                user=request.user,
                entry_date=datetime.datetime.now()
                )
            new_post.save()
            return HttpResponseRedirect(reverse('blog_home'))

    # Initial, GET, or any other type of request
    else:
        # Instantiate an empty form
        form = NewBlogPost()

    # Render initial form state
    return render(request, 'blog/new_blog_post.html', {'form': form})


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('blog_home')
    else:
        form = SignupForm()
    return render(request, 'registration/signup.html', {'form': form})

def register(request):

    registered = False

    if request.method == 'POST':
        user_form = UserForm(request.POST)

        if user_form.is_valid():
            user = user_form.save()

            user.set_password(user.password)
            user.save()

            registered = True

        else:
            print(user_form.errors, profile_form.errors)

    else:
        user_form = UserForm()

    return render(request, 'registration/register.html',
    {'user_form': user_form, 'registered': registered})
