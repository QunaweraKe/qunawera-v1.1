# Generated by Django 3.1.1 on 2021-09-27 18:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20210919_2243'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'verbose_name_plural': 'Active posts'},
        ),
    ]