import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Input() recipes:IRecipe[] = null;
  @Input() params:string = "";

  constructor() { }



}
