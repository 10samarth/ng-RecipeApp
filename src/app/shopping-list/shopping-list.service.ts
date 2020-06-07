import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs'

export class ShoppingService{
    ingridentsChanged = new Subject<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

    getIngridents(){
        return this.ingredients.slice();
    }

    addIngrident(ingrident:Ingredient){
        this.ingredients.push(ingrident);
        this.ingridentsChanged.next(this.ingredients.slice());
    }

    addItems(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient)
        this.ingridentsChanged.next(this.ingredients.slice());
    }
}