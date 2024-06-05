import { Component } from '@angular/core';
import { iUser } from '../../model/i-user';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.scss'
})
export class UtenteComponent {

  user!:iUser;

  constructor(
    private authSvc:AuthService
  ){}

  ngOnInit(){

    this.authSvc.user$.subscribe(user => {
      if(user) this.user = user
    })

  }






}
