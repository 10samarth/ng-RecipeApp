import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs'

export class ShoppingService{
    ingridentsChanged = new Subject<Ingredient[]>();
    startedEditing =  new Subject<number>();
    private ingredients : Ingredient[] = [
        new Ingredient('Pav',5),
        new Ingredient('Bhaji Masala',10)
      ];

    getIngridents(){
        return this.ingredients.slice();
    }

    getIngrident(index:number){
        return this.ingredients[index];
    }

    addIngrident(ingrident:Ingredient){
        this.ingredients.push(ingrident);
        this.ingridentsChanged.next(this.ingredients.slice());
    }

    addItems(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient)
        this.ingridentsChanged.next(this.ingredients.slice());
    }

    updateIngrident(index:number,newItem:Ingredient){
        this.ingredients[index]= newItem
        this.ingridentsChanged.next(this.ingredients.slice())
    }

    deleteIngrident(index:number){
        this.ingredients.splice(index,1);
        this.ingridentsChanged.next(this.ingredients.slice())

    }
}