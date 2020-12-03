import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  registerHandler(formData){
    this.userService.register(formData).subscribe(data => {
      console.log(data);
    })
  }
}
