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
        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({
                'class': 'form-control'
    })

    # password1 = forms.CharField(
    #     label="Password",
    #     strip=False,
    #     widget=forms.PasswordInput,
    #     help_text=password_validation.password_validators_help_text_html(),
    # )
    # password2 = forms.CharField(
    #     label="Password confirmation",
    #     widget=forms.PasswordInput,
    #     strip=False,
    #     help_text=_("Enter the same password as before, for verification."),
    # )
