import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddOperationComponent } from './components/add-operation/add-operation.component';
import { OperationDetailsComponent } from './components/operation-details/operation-details.component';
import { OperationsListComponent } from './components/operations-list/operations-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'operations', pathMatch: 'full' },
  { path: 'operations', component: OperationsListComponent },
  { path: 'operations/:id', component: OperationDetailsComponent },
  { path: 'add', component: AddOperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
