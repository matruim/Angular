import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../component/recipes/recipe.service";
import {Recipe} from "../component/recipes/recipes.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../component/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private url:string = 'https://angulardb-5dbd9-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe(res => console.log(res));
  }
  fetchRecipes(){
    return this.http.get<Recipe[]>(this.url).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return{...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        });
      }),
      tap(recipes => this.recipeService.setRecipes(recipes)),
    );
  }
}
