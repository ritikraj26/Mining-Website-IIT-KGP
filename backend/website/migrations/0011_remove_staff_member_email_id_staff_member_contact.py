# Generated by Django 4.2.2 on 2023-09-04 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0010_alter_education_options_alter_event_options_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='staff_member',
            name='email_id',
        ),
        migrations.AddField(
            model_name='staff_member',
            name='contact',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
