import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes:IRecipe[];

  constructor() { }

  ngOnInit(): void {
  }

}
