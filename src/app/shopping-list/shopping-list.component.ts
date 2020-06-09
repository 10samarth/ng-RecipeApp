import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
   
  ingredients : Ingredient[] 
  private igChangeSub:Subscription
  
  constructor(private slService:ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngridents()
    this.igChangeSub =this.slService.ingridentsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients
      }
    )
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index:number){
      this.slService.startedEditing.next(index);
  }

}
