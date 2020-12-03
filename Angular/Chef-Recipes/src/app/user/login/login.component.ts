import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  loginHandler(formData){
    this.userService.login(formData).subscribe( data => {
      this.userService.saveToken(data["token"]);
    });
  }

}
