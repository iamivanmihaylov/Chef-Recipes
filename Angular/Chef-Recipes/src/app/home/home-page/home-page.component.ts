import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe/services/recipe.service';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public recipes:IRecipe[] = null;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes("").subscribe(data => {
      this.recipes = data;
    })
  }

}
