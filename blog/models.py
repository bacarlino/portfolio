from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse
import uuid


# class UserProfile(models.Model):
#     user = models.OneToOneField(User)
#
#     picture = models.ImageField(upload_to='profile_images', blank=True)
#
#     def __unicode__(self):
#         return self.user.username


class BlogPost(models.Model):

    # id = models.UUIDField(default=uuid.uuid4, help_text='Unique ID for this blog post')

    title = models.CharField(max_length=200)

    body = models.TextField(max_length=1000, help_text="Type the body of your post here")

    entry_date = models.DateField(null=True)

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title


    # def get_absolute_url(self):
    #     return reverse('blog_home', args=[str(self.id)])
