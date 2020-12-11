import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { StringManipulationService } from 'src/app/shared/services/string-manipulation.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe:IRecipe;

  isLiked = false

 get isAuthenticated() {
   return this.userService.isAuthenticated();
 }
  

  likeHandler(){
    this.isLiked = !this.isLiked
  }

  constructor(private userService:UserService,public stringMainpulation:StringManipulationService) { }

  ngOnInit(): void {
  }

}
