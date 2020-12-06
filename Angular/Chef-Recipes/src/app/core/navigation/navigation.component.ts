import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private userService:UserService) { }

  get isAuthenticated():boolean{
    return this.userService.isLogged;
  }

  get currUser(){
    return this.userService.user.userName;
  }

  ngOnInit(): void {
  }

  logoutHandler(){
    this.userService.logout();
  }
}
