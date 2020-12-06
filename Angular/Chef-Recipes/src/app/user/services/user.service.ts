import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IToken } from 'src/app/shared/interfaces/token-data.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginPath = environment.apiUrl + "identity/login";
  private registerPath = environment.apiUrl + "identity/register";
  private getUserPath = environment.apiUrl + "identity/currentuser";
  private tokenName = "token"
  public user;

  public isLogged:boolean = this.isAuthenticated();

  constructor(private http:HttpClient) {
    this.isLogged = this.isAuthenticated()
    this.user;
   }

  login(data): Observable<any>{
    let result = this.http.post(this.loginPath,data)
    this.isLogged = true;
    this.getCurrentUser()
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

    if(hasToken == null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    window.localStorage.removeItem(this.tokenName);
    this.isLogged = false;
  }

  getCurrentUser(){
    this.http.get(this.getUserPath,{
    headers:new HttpHeaders().set('Authorization',`Bearer ${this.getToken()}`)}).subscribe(data =>{
      this.user = data
    })
  }
}
