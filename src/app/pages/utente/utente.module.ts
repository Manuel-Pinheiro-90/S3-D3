import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtenteRoutingModule } from './utente-routing.module';
import { UtenteComponent } from './utente.component';


@NgModule({
  declarations: [
    UtenteComponent
  ],
  imports: [
    CommonModule,
    UtenteRoutingModule
  ]
})
export class UtenteModule { }
