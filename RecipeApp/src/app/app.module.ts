import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {RecipesModule} from "./component/recipes/recipes.module";
import {ShoppingListModule} from "./component/shopping-list/shopping-list.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./component/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
