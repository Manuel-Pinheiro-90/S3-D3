import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})



export class NavComponent {
isLoggedIn:boolean = false


  constructor(private authSvc:AuthService){}

  ngOnInit(){

    this.authSvc.isLoggedIn$
    .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn )

  }

  logout(){
    this.authSvc.logout()
  }




}
