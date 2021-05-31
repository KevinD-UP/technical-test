from django.db import models


# Create your models here.
class Operation(models.Model):
    titreoperation = models.CharField(max_length=255, blank=False, default='')
    entreprise = models.CharField(max_length=255, blank=False, default='')
    annee_de_livraison = models.CharField(max_length=255, blank=False, default='')
    ville = models.CharField(max_length=255, blank=False, default='')
    ppi = models.CharField(max_length=255, blank=False, default='')
    lycee = models.CharField(max_length=255, blank=False, default='')
    notification_du_marche = models.CharField(max_length=255, blank=False, default='')
    codeuai = models.CharField(max_length=255, blank=False, default='')
    longitude = models.DecimalField(max_digits=100, decimal_places=90)
    etat_d_avancement = models.CharField(max_length=255, blank=False, default='')
    montant_des_ap_votes_en_meu = models.IntegerField()
    cao_attribution = models.CharField(max_length=255, blank=False, default='')
    latitude = models.DecimalField(max_digits=100, decimal_places=90)
    maitrise_d_oeuvre = models.CharField(max_length=255, blank=False, default='')
    mode_de_devolution = models.CharField(max_length=255, blank=False, default='')
    annee_d_individualisation = models.CharField(max_length=255, blank=False, default='')
    enveloppe_prev_en_meu = models.DecimalField(max_digits=100, decimal_places=90)
