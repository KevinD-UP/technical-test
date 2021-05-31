# Generated by Django 3.2.3 on 2021-05-31 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Operation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titreoperation', models.CharField(default='', max_length=255)),
                ('entreprise', models.CharField(default='', max_length=255)),
                ('annee_de_livraison', models.CharField(default='', max_length=255)),
                ('ville', models.CharField(default='', max_length=255)),
                ('ppi', models.CharField(default='', max_length=255)),
                ('lycee', models.CharField(default='', max_length=255)),
                ('notification_du_marche', models.CharField(default='', max_length=255)),
                ('codeuai', models.CharField(default='', max_length=255)),
                ('longitude', models.DecimalField(decimal_places=90, max_digits=100)),
                ('etat_d_avancement', models.CharField(default='', max_length=255)),
                ('montant_des_ap_votes_en_meu', models.IntegerField()),
                ('cao_attribution', models.CharField(default='', max_length=255)),
                ('latitude', models.DecimalField(decimal_places=90, max_digits=100)),
                ('maitrise_d_oeuvre', models.CharField(default='', max_length=255)),
                ('mode_de_devolution', models.CharField(default='', max_length=255)),
                ('annee_d_individualisation', models.CharField(default='', max_length=255)),
                ('enveloppe_prev_en_meu', models.DecimalField(decimal_places=90, max_digits=100)),
            ],
        ),
    ]