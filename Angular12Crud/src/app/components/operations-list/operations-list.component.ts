import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';


@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css']
})
export class OperationsListComponent implements OnInit {

  operations?: Operation[];
  currentOperation: Operation = {};
  currentIndex = -1;
  ville = '';
  etat_d_avancement = '';

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.retrieveOperations();
  }

  retrieveOperations(): void {
    this.operationService.getAll()
      .subscribe(data => {
        this.operations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveOperations();
    this.currentOperation = {};
    this.currentIndex = -1;
  }

  setActiveOperation(operation: Operation, index: number): void {
    this.currentOperation = operation;
    this.currentIndex = index;
  }

  removeAllOperations(): void {
    this.operationService.deleteAll()
      .subscribe(response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }

  searchVille(): void {
    this.currentOperation = {};
    this.currentIndex = -1;

    this.operationService.findByVille(this.ville)
      .subscribe(data => {
        this.operations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  searchetat_d_avancement(): void {
    this.currentOperation = {};
    this.currentIndex = -1;

    this.operationService.findByetat_d_avancement(this.etat_d_avancement)
      .subscribe(data => {
        this.operations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}

