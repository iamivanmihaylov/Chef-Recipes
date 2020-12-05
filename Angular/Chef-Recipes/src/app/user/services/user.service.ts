import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToken } from 'src/app/shared/interfaces/token-data.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginPath = environment.apiUrl + "identity/login";
  private registerPath = environment.apiUrl + "identity/register";
  private tokenName = "token"
  public isLogged:boolean = this.isAuthenticated();

  constructor(private http:HttpClient) {
    this.isLogged == this.isAuthenticated()
   }

  login(data): Observable<any>{
    let result = this.http.post(this.loginPath,data)
    this.isLogged = true;
    return result
    
  }

  register(data): Observable<any>{
    return this.http.post(this.registerPath,data);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  saveToken(token:IToken){
    console.log(token);
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
}
