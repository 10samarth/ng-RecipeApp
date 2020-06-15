import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
 
@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
  

    // private recipes: Recipe[] = [
    //     new Recipe('Pav Bhajji',
    //         'Simple Pav Bhajji',
    //         'https://pavbhajihut.com/wp-content/themes/twentyseventeen-child/assets/images/pwv1.png',
    //         [
    //             new Ingredient('Pav', 2),
    //             new Ingredient('Bhaji', 1),
    //             new Ingredient('Coriander', 1)
    //         ]),
    //     new Recipe('Cheese Pav Bhajji',
    //         'Special Pav Bhajji',
    //         'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Cheesy_Pav_Bhaji_Recipe.jpg',
    //         [new Ingredient('Pav', 2),
    //         new Ingredient('Bhaji', 1),
    //         new Ingredient('Coriander', 1),
    //         new Ingredient('Cheese', 1)
    //         ])
    // ];

    private recipes: Recipe[] = []
    
    constructor(private slService:ShoppingService){

    }

    setRecipe(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipeList() {
        return this.recipes.slice()
    }

    getRecipe(index:number){
        return this.recipes[index]
    }

    addItemsToShoppingList(item:Ingredient[]){
        this.slService.addItems(item)
    }

    addRecipe(newRecipe:Recipe){
        this.recipes.push(newRecipe)
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(index:number, recipe:Recipe){
        this.recipes[index]=recipe
        this.recipeChanged.next(this.recipes.slice())
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice())

    }
}