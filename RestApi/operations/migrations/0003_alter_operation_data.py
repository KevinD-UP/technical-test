# Generated by Django 3.2.3 on 2021-06-01 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('operations', '0002_auto_20210601_2146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='operation',
            name='data',
            field=models.JSONField(default=dict),
        ),
    ]
