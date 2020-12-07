import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  constructor(private userService:UserService) {
  }

  get userName():string{
    let user:IUser = this.userService.getUser();
    console.log("Here");
    return user.userName;
  }

  get isAuthenticated():boolean{
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    
  }

  logoutHandler(){
    this.userService.logout();
  }
}
