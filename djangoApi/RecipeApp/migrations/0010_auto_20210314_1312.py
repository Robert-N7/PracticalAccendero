# Generated by Django 3.1.7 on 2021-03-14 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RecipeApp', '0009_auto_20210311_1922'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='PhotoFileName',
        ),
        migrations.AddField(
            model_name='recipe',
            name='PhotoFile',
            field=models.ImageField(null=True, upload_to='recipes'),
        ),
    ]
