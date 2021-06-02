import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from 'src/app/models/operation.model';


@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.css']
})
export class OperationDetailsComponent implements OnInit {

  currentOperation: Operation = {
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
  message = '';

  constructor(
    private operationService: OperationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getOperation(this.route.snapshot.params.id)
  }

  getOperation(id: string): void {
    this.operationService.get(id)
      .subscribe(
        data => {
          this.currentOperation = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateOperation(): void {
    this.message = '';

    this.operationService.update(this.currentOperation.id, this.currentOperation)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Operation was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteOperation(): void {
    this.operationService.delete(this.currentOperation.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/operations']);
        },
        error => {
          console.log(error);
        });
  }

}
