import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user.model';
import { StringManipulationService } from 'src/app/shared/services/string-manipulation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService,private route:ActivatedRoute,public stringManipulation:StringManipulationService) { }

  public user:IUser = null;

  ngOnInit(): void {
    let userId:string = this.route.snapshot.params['id']
    this.userService.getUserById(userId).subscribe( data =>{
      this.user = data;
    });
  }


}
