import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginPath = environment.apiUrl + "identity/login";
  private registerPath = environment.apiUrl + "identity/register";
  private tokenName = "token"
  private isLogged:boolean = false;

  constructor(private http:HttpClient) { }

  login(data): Observable<any>{
    return this.http.post(this.loginPath,data)
  }

  register(data): Observable<any>{
    return this.http.post(this.registerPath,data);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  saveToken(token){
    localStorage.setItem("token",token);
  }

  isAuthenticated() : boolean{
    const hasToken:string = window.localStorage.getItem(this.tokenName);

    if (hasToken == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
    
    console.log(this.isLogged);

    return this.isLogged;
  }

  logout(){
    window.localStorage.removeItem(this.tokenName)
  }
}
