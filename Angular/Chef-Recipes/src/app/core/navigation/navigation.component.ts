import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private userService:UserService) { }

  isAuthenticated:boolean = this.userService.isAuthenticated();
  ngOnInit(): void {
  }

  logoutHandler(){
    this.userService.logout();
  }
}
