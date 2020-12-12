import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from 'src/app/recipe/services/recipe.service';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { IUser } from 'src/app/shared/interfaces/user.model';
import { StringManipulationService } from 'src/app/shared/services/string-manipulation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService,
    private route:ActivatedRoute,
    public stringManipulation:StringManipulationService,
    public recipeService:RecipeService,
    private router:Router) { }

  public user:IUser = null;

  public recipes:IRecipe[] = null;
  public recipesCount:number = 0;

  ngOnInit(): void {
    this.route.params.pipe(switchMap(({ id }) => {
      return this.userService.getUserById(id)
    }),switchMap((data) =>{
        this.user = data
      return this.recipeService.getAllRecipes(`?userId=${this.user.userId}`)
    })).subscribe(
      {
        next: (allRecipes) => {
          this.recipes = allRecipes;
      this.recipesCount = allRecipes.length
        },
        error: (err) =>{
          if (err.status === 404){
            this.router.navigate(['/404'])
          }
        }
      }
    )
  }

}
