# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-27 01:55
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, help_text='Unique ID for this blog post', primary_key=True, serialize=False),
        ),
    ]