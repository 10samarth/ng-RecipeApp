import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService{
    ingridentsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

    getIngridents(){
        return this.ingredients.slice();
    }

    addIngrident(ingrident:Ingredient){
        this.ingredients.push(ingrident);
        this.ingridentsChanged.emit(this.ingredients.slice());
    }

    addItems(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient)
    }
}