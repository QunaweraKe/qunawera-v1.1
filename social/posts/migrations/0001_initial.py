# Generated by Django 3.2.3 on 2021-11-01 09:39

from django.db import migrations, models
import posts.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True)),
                ('title', models.TextField(max_length=200)),
                ('body', models.TextField(blank=True, max_length=1500)),
                ('posts_id', models.CharField(default=posts.models.generate_unique_id, max_length=8, unique=True)),
                ('updated_at', models.DateTimeField(auto_now=True, db_index=True, null=True)),
                ('requirements', models.TextField(max_length=800, null=True)),
                ('deleted', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/%Y/%m/%d/')),
                ('is_reply', models.BooleanField(default=False)),
                ('closed', models.BooleanField(default=False)),
                ('is_reported', models.BooleanField(default=False)),
                ('report_statement', models.TextField(max_length=450)),
            ],
            options={
                'verbose_name_plural': 'Active posts',
            },
        ),
    ]
