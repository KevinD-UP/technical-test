import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
