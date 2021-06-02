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
    data: JSON,
  };
  submitted: boolean = false;

  constructor(private OperationService: OperationService) { }

  ngOnInit(): void {
  }

  saveOperation(): void {
    const data = {
      data: this.operation.data
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
      data: JSON
    };
  }

}
