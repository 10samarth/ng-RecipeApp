import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {
  
  subscription:Subscription
 
  recipes:Recipe[]

  constructor(private recipeServicve:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() { 
    this.subscription = this.recipeServicve.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes
      }
    )
    this.recipes = this.recipeServicve.getRecipeList()
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
