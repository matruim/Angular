import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./component/recipes/recipes.component";
import {ShoppingListComponent} from "./component/shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./component/recipes/recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./component/recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./component/recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./component/recipes/recipes-resolver.service";


const appRoutes: Routes = [
  { path:'', redirectTo:'/recipes', pathMatch:'full'},
  {
    path:'recipes',
    component: RecipesComponent,
    children: [
      {path: '', component:RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component:RecipeDetailComponent, resolve: {recipes: RecipesResolverService}},
      {path: ':id/edit', component:RecipeEditComponent, resolve: {recipes: RecipesResolverService}},
    ]
  },
  {
    path:'shopping-list',
    component: ShoppingListComponent
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
