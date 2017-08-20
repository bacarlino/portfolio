from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


class NewBlogPost(forms.Form):
    title = forms.CharField(label="Title", max_length=200)
    body = forms.CharField(label="Body", max_length=1000, widget=forms.Textarea)


class UserForm(forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput(),
        help_text="TEST HELP_TEXT"
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class LoginForm(AuthenticationForm):
    pass

class SignupForm(UserCreationForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        #  Add the bootstrap class 'form-control' to each field
        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({
                'class': 'form-control'
    })
