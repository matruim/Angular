import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  { path:'', redirectTo:'/recipes', pathMatch:'full'},
  { path:'recipes', loadChildren: () => import('./component/recipes/recipes.module').then(m => m.RecipesModule)},
  { path:'shopping-list', loadChildren: () => import('./component/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
  { path:'auth', loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule)}
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
