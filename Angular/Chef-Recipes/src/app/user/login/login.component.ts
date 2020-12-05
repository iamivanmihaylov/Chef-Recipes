import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { IToken } from 'src/app/shared/interfaces/token-data.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  loginHandler(formData){
    this.userService.login(formData).subscribe( data => {
      let token:IToken = data;
      this.userService.saveToken(token.tokenData)
      this.router.navigateByUrl("/")
    });
  }

}
