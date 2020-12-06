import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.css']
})
export class ControlMenuComponent implements OnInit {

  get isAuthenticated(){
    return this.userService.isLogged
  } 

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
