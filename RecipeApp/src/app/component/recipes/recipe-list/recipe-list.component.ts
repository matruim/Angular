import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Mac and Cheese","noodles in a cheese sauce","https://media.istockphoto.com/photos/baked-mac-and-cheese-picture-id1194753924?k=20&m=1194753924&s=612x612&w=0&h=sGdrke6pXyMKBI4YXoAt3ShD99RufnGcdcvU1503hhI="),
    new Recipe("Spaghetti", "noodles in a tomate sauce", "")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
