# Generated by Django 3.1.1 on 2021-07-09 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_auto_20210624_1933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='type',
            field=models.PositiveIntegerField(choices=[(2, 'Like Post'), (3, 'Reply'), (4, 'Follow')]),
        ),
    ]
