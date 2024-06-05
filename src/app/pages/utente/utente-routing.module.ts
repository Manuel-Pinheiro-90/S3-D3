import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtenteComponent } from './utente.component';

const routes: Routes = [{ path: '', component: UtenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtenteRoutingModule { }
