# Generated by Django 3.1.1 on 2021-10-04 11:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserSession',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('session_key', models.CharField(max_length=100, null=True)),
                ('time_loggedin', models.DateTimeField(auto_now_add=True)),
                ('ip_address', models.CharField(blank=True, max_length=250, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('in_active', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Viewed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('obj_id', models.PositiveIntegerField()),
                ('time_viewed', models.DateTimeField(auto_now_add=True)),
                ('ip_address', models.CharField(blank=True, max_length=150, null=True)),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
            ],
            options={
                'verbose_name': 'Viewed Item',
                'verbose_name_plural': 'Viewed ',
                'ordering': ['-time_viewed'],
            },
        ),
    ]
