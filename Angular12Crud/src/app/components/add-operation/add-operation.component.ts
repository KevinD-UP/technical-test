import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {

  operation: Operation = {
    titreoperation: '', 
    entreprise: '', 
    annee_de_livraison: '', 
    ville : '',
    ppi: '', 
    lycee: '', 
    notification_du_marche: '',
    codeuai: '', 
    longitude: 0.0,
    etat_d_avancement: '', 
    montant_des_ap_votes_en_meu: 0,
    cao_attribution: '',
    latitude: 0.0,
    maitrise_d_oeuvre: '', 
    mode_de_devolution: '', 
    annee_d_individualisation: '', 
    enveloppe_prev_en_meu: 0.0
  };
  submitted: boolean = false;

  constructor(private OperationService: OperationService) { }

  ngOnInit(): void {
  }

  saveOperation(): void {
    const data = {
      titreoperation: this.operation.titreoperation, 
      entreprise: this.operation.entreprise, 
      annee_de_livraison: this.operation.annee_de_livraison, 
      ville : this.operation.ville, 
      ppi: this.operation.ppi, 
      lycee: this.operation.lycee, 
      notification_du_marche: this.operation.notification_du_marche, 
      codeuai: this.operation.codeuai, 
      longitude: this.operation.longitude, 
      etat_d_avancement: this.operation.etat_d_avancement, 
      montant_des_ap_votes_en_meu: this.operation.montant_des_ap_votes_en_meu,
      cao_attribution: this.operation.cao_attribution,
      latitude: this.operation.latitude,
      maitrise_d_oeuvre: this.operation.maitrise_d_oeuvre,
      mode_de_devolution: this.operation.mode_de_devolution, 
      annee_d_individualisation: this.operation.annee_d_individualisation,
      enveloppe_prev_en_meu: this.operation.enveloppe_prev_en_meu,
    };

    this.OperationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newOperation(): void {
    this.submitted = false;
    this.operation = {
      titreoperation: '', 
      entreprise: '', 
      annee_de_livraison: '', 
      ville : '',
      ppi: '', 
      lycee: '', 
      notification_du_marche: '',
      codeuai: '', 
      longitude: 0.0,
      etat_d_avancement: '', 
      montant_des_ap_votes_en_meu: 0,
      cao_attribution: '',
      latitude: 0.0,
      maitrise_d_oeuvre: '', 
      mode_de_devolution: '', 
      annee_d_individualisation: '', 
      enveloppe_prev_en_meu: 0.0
    };
  }

}
