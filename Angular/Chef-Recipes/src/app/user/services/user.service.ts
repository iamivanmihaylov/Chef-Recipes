import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable, Subject } from 'rxjs';
import { debounceTime, map, switchMap, throttleTime } from 'rxjs/operators';
import { IToken } from 'src/app/shared/interfaces/token-data.model';
import { IUser } from 'src/app/shared/interfaces/user.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginPath = environment.apiUrl + "identity/login";
  private registerPath = environment.apiUrl + "identity/register";
  private getUserPath = environment.apiUrl + "identity/currentuser";
  private tokenName = "token"
  


  constructor(private http:HttpClient,private router:Router) {
  }

  login(data): Observable<any>{
    let result = this.http.post(this.loginPath,data)
    return result
  }

  register(data): Observable<any>{
    return this.http.post(this.registerPath,data);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  saveToken(token:IToken){
    localStorage.setItem("token",token.token);
  }

  isAuthenticated() : boolean{
    const hasToken:string = window.localStorage.getItem(this.tokenName);

    if (hasToken == null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate(['/']);
  }

  saveUser(): Observable<IUser>{
   return this.http.get<IUser>(this.getUserPath,{
   headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)})
  }

  getCurrentUser(){
    let currUser:IUser = JSON.parse(localStorage.getItem("user"));
    return currUser;
  }
}
