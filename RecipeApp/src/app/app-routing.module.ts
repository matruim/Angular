import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./component/recipes/recipes.component";
import {ShoppingListComponent} from "./component/shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./component/recipes/recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./component/recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./component/recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./component/recipes/recipes-resolver.service";
import {AuthComponent} from "./component/auth/auth.component";
import {AuthGuard} from "./component/auth/auth.guard";


const appRoutes: Routes = [
  { path:'', redirectTo:'/recipes', pathMatch:'full'},
  {
    path:'shopping-list',
    component: ShoppingListComponent
  },
  {
    path:'auth',
    component: AuthComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
