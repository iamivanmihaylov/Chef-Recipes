import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,concat, merge, of,zip} from 'rxjs';
import { concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { IToken } from 'src/app/shared/interfaces/token-data.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  public user:any;

  ngOnInit(): void {
  }

  loginHandler(formData){

    this.userService.login(formData).pipe(
      switchMap(({ token }) => {
        this.userService.saveToken({token})
        return this.userService.saveUser()
      })
    ).subscribe(data => {
      localStorage.setItem("user",JSON.stringify(data));
      this.router.navigate(['/'])
    })
   
  }
}
