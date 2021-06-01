from rest_framework import serializers 
from operations.models import Operation
 
 
class OperationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Operation
        fields =  ('id',
                'titreoperation',
                'entreprise',
                'annee_de_livraison',
                'ville',
                'ppi',
                'lycee',
                'notification_du_marche',
                'codeuai',
                'longitude',
                'etat_d_avancement',
                'montant_des_ap_votes_en_meu',
                'cao_attribution',
                'latitude',
                'maitrise_d_oeuvre',
                'mode_de_devolution',
                'annee_d_individualisation',
                'enveloppe_prev_en_meu')