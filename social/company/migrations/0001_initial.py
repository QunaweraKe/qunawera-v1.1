# Generated by Django 3.1.1 on 2021-08-23 09:34

import django.contrib.postgres.fields.citext
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Careers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Job_title', models.CharField(max_length=150)),
                ('Description', models.TextField()),
                ('Roles', models.TextField()),
                ('Skills', models.TextField()),
                ('Status', models.BooleanField(default=True)),
                ('Location', models.CharField(max_length=150)),
                ('Expected_salary', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name_plural': 'Careers',
            },
        ),
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', django.contrib.postgres.fields.citext.CIEmailField(max_length=255, unique=True)),
                ('description', models.TextField(max_length='400')),
                ('date_created', models.DateTimeField(auto_now_add=True, db_index=True)),
            ],
            options={
                'verbose_name_plural': 'Contact Us',
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Job_title', models.CharField(max_length=150)),
                ('About', models.TextField()),
                ('Roles', models.TextField()),
                ('Skills', models.TextField()),
                ('Status', models.BooleanField(default=True)),
                ('Image', models.ImageField(blank=True, null=True, upload_to='images/%Y/%m/%d/')),
            ],
            options={
                'verbose_name_plural': 'Teams',
            },
        ),
    ]
