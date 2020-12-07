import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,concat, merge } from 'rxjs';
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
    this.userService.login(formData).subscribe( token => {
      this.userService.saveToken(token)
      this.userService.saveUser().subscribe(data => {
        this.user = data;
        localStorage.setItem("user",JSON.stringify(this.user));
        this.router.navigate(['/'])
      });
    });


    

   

    

  }

}
