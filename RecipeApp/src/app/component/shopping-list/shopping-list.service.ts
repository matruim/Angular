import {Injectable} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  listUpdated = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private list: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getlist(){
    return this.list.slice();
  }
  getItem(index: number){
    return this.list[index];
  }
  addToList(item:Ingredient){
    this.list.push(item);
    this.listUpdated.next(this.getlist());
  }
  addItemsToList(items:Ingredient[]){
    this.list.push(...items)
    this.listUpdated.next(this.getlist());
  }
  updateItem(index: number, newItem: Ingredient){
    this.list[index] = newItem;
    this.listUpdated.next(this.getlist());
  }
  removeItem(index: number){
    this.list.splice(index, 1);
    this.listUpdated.next(this.getlist());
  }
}
