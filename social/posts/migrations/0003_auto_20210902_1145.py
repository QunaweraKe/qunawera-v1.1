# Generated by Django 3.2.3 on 2021-09-02 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20210901_0019'),
    ]

    operations = [
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
                'verbose_name_plural': 'Posted Today',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('posts.post',),
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'verbose_name_plural': 'All posts'},
        ),
        migrations.AddField(
            model_name='post',
            name='is_reported',
            field=models.BooleanField(default=False),
        ),
        migrations.DeleteModel(
            name='Reported',
        ),
    ]