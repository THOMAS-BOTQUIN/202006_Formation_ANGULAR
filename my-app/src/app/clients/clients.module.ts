import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { FormEditClientComponent } from './components/form-edit-client/form-edit-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

@NgModule({
  declarations: [PageListClientsComponent, FormAddClientComponent, PageAddClientComponent, FormEditClientComponent, PageEditClientComponent],
  imports: [
    CommonModule, ClientsRoutingModule, SharedModule, ReactiveFormsModule
  ]
})
export class ClientsModule { }
