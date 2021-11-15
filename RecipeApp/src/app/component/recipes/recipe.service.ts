import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipes.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Mac and Cheese","noodles in a cheese sauce","https://media.istockphoto.com/photos/baked-mac-and-cheese-picture-id1194753924?k=20&m=1194753924&s=612x612&w=0&h=sGdrke6pXyMKBI4YXoAt3ShD99RufnGcdcvU1503hhI="),
    new Recipe("Spaghetti", "noodles in a tomato sauce", "")
  ];
  constructor() {
  }
  getRecipes(){
    return this.recipes.slice();
  }
}
