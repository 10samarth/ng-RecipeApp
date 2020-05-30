import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() selRecipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  
  onAddShoppingList(){
    this.recipeService.addItemsToShoppingList(this.selRecipe.ingredients)
  }

}
