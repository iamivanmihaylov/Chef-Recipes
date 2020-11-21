import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';



@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecipeListComponent
  ]
})
export class RecipeModule { }
