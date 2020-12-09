import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe;

  isLiked = false

 get isAuthenticated() {
   return this.userService.isAuthenticated();
 }
  

  likeHandler(){
    this.isLiked = !this.isLiked
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
