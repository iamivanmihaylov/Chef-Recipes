import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes:IRecipe[] = null;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(data => {
      console.log(data);
      this.recipes = data;
    })
  }

}
