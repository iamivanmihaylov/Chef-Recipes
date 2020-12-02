import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeOpenComponent } from './recipe-open/recipe-open.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeOpenComponent,
    RecipeCreateComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditorModule
  ],
  exports:[
    RecipeListComponent,
    PaginationComponent
  ]
})
export class RecipeModule { }
