import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './component/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from "./component/recipes/recipes.component";
import { RecipeListComponent } from './component/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './component/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './component/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';
import { RecipeService} from "./component/recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
