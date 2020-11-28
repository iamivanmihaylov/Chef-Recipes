import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeOpenComponent } from './recipe-open/recipe-open.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeOpenComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RecipeListComponent
  ]
})
export class RecipeModule { }
