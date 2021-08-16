# Generated by Django 3.1.1 on 2021-08-16 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('is_read', models.BooleanField(default=False)),
                ('type', models.PositiveIntegerField(choices=[(1, 'Repost'), (2, 'Like Post'), (3, 'Reply'), (4, 'Follow')])),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
