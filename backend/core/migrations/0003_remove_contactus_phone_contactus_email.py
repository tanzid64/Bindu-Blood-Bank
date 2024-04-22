# Generated by Django 5.0.4 on 2024-04-22 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_contactus_mark_as_done_alter_service_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactus',
            name='phone',
        ),
        migrations.AddField(
            model_name='contactus',
            name='email',
            field=models.EmailField(default=None, max_length=255),
            preserve_default=False,
        ),
    ]
