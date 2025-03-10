import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOperationComponent } from './components/add-operation/add-operation.component';
import { OperationDetailsComponent } from './components/operation-details/operation-details.component';
import { OperationsListComponent } from './components/operations-list/operations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOperationComponent,
    OperationDetailsComponent,
    OperationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
