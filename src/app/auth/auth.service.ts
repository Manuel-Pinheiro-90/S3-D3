import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { iUser } from '../model/i-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthResponse } from '../model/i-auth-response';
import { iAuthData } from '../model/i-auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


jwtHelper:JwtHelperService = new JwtHelperService()

authSubject =new BehaviorSubject<null|iUser>(null)


user$ = this.authSubject.asObservable()




  constructor(private http:HttpClient,
    private router:Router) { }



loginUrl:string =' http://localhost:3000/login'
registerUrl:string = 'http://localhost:3000/register'

register(newUser:Partial<iUser>):Observable<iAuthResponse>{
  return this.http.post<iAuthResponse>(this.registerUrl,newUser)
}



login(authData:iAuthData):Observable<iAuthResponse>{
  return this.http.post<iAuthResponse>(this.loginUrl,authData)
  .pipe(tap(data=>{

    this.authSubject.next(data.user)
    localStorage.setItem('accessData',JSON.stringify(data))

  }))

}

  }
