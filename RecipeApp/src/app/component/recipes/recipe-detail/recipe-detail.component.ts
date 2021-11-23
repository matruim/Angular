import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipes.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  private id:number;

  constructor(private rService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      this.id = +params['id']
      this.recipe = this.rService.getRecipeById(this.id);
    });
  }

  addRecipeToShoppingList() {
    this.rService.addRecipeToShoppingList(this.recipe);
  }

  onDelete() {
    this.rService.removeRecipe(this.id)
  }
}
