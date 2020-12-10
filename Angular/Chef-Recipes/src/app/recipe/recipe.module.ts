import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeOpenComponent } from './recipe-open/recipe-open.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedModule } from '../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeOpenComponent,
    RecipeCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditorModule,
    SharedModule,
    RecipeRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    RecipeListComponent,
  ]
})
export class RecipeModule { }
