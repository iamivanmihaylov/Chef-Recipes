import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { StringManipulationService } from 'src/app/shared/services/string-manipulation.service';
import { UserService } from 'src/app/user/services/user.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe:IRecipe;

  isLiked = false;
  likes = 0;

 get isAuthenticated() {
   return this.userService.isAuthenticated();
 }
  

  likeHandler(){
    if(this.isLiked == true){
      this.recipeService.dislikePost(this.recipe.id).subscribe(data =>{
        this.isLiked = data.isLiked
      })
    }

    if(this.isLiked == false){
      this.recipeService.likePost(this.recipe.id).subscribe(data => {
        this.isLiked = data.isLiked;
        this.likes = data.likesCount;
      })
    }
  }

  constructor(private userService:UserService,
    public stringMainpulation:StringManipulationService,
    public recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllLikes(this.recipe.id).subscribe(data => {
      this.isLiked = data.isLiked;
      this.likes = data.likesCount;
    });
  }

}
