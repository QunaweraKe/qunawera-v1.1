# Generated by Django 3.2.3 on 2021-11-01 09:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='post',
            name='liked',
            field=models.ManyToManyField(blank=True, related_name='liked', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='post',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='alt', to='posts.post'),
        ),
        migrations.CreateModel(
            name='Closed',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Closed Posts',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='DeletedPosts',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Deleted Posts',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='DeletedReplies',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Deleted Replies',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='PostsNotApproved',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Posts Not Approved',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='PostsToday',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Posted Today-Approved',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='PostsTodayNotApproved',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Posted Today-Not Approved',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='Replies',
            fields=[
            ],
            options={
                'verbose_name_plural': 'All Replies',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='ReportedPosts',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Reported Posts',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.CreateModel(
            name='ReportedReplies',
            fields=[
            ],
            options={
                'verbose_name_plural': 'Reported Replies',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
    ]
