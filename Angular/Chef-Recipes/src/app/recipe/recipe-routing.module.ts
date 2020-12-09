import { Routes, RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeOpenComponent } from './recipe-open/recipe-open.component';


const routes: Routes = [
  {
    path: 'recipe/create',
    component: RecipeCreateComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeOpenComponent
  }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);
