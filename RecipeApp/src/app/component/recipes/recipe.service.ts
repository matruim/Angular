import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipes.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Mac and Cheese",
      "noodles in a cheese sauce",
      "https://media.istockphoto.com/photos/baked-mac-and-cheese-picture-id1194753924?k=20&m=1194753924&s=612x612&w=0&h=sGdrke6pXyMKBI4YXoAt3ShD99RufnGcdcvU1503hhI=",
      [
        new Ingredient("Macaroni Noodles", 1),
        new Ingredient("Cheese Sauce", 1)
      ]
    ),
    new Recipe(
      "Spaghetti",
      "noodles in a tomato sauce",
      "",
      [
        new Ingredient("Spaghetti Noodles", 1),
        new Ingredient("Tomato Sauce", 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipeById(id:number){
    return this.recipes[id];
  }
  addRecipeToShoppingList(recipe: Recipe){
    this.slService.addItemsToList(recipe.ingredients);
  }

  removeRecipe(id: number) {
    this.recipes.splice(id,1);
  }
}
