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
export class NavigationComponent{
  constructor(private userService:UserService) {
    
  }

  get isAuthenticated(){
    return this.userService.isAuthenticated()
  }
}
