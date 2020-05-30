import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   
  ingredients : Ingredient[] 

  constructor(private slService:ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngridents()
    this.slService.ingridentsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients
      }
    )
  }

}
