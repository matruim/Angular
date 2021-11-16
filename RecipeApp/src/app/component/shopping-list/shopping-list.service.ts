import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  listUpdated = new EventEmitter<Ingredient[]>();
  private list: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getlist(){
    return this.list.slice();
  }
  addToList(item:Ingredient){
    this.list.push(item);
    this.listUpdated.emit(this.getlist());
  }
  addItemsToList(items:Ingredient[]){
    this.list.push(...items)
    this.listUpdated.emit(this.getlist());
  }
}
