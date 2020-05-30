import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pav Bhajji',
            'Normal Pav Bhajji',
            'https://previews.123rf.com/images/csstockimages/csstockimages1710/csstockimages171001097/88101444-indian-traditional-street-food-pav-bhaji.jpg',
            [
                new Ingredient('Pav', 2),
                new Ingredient('Bhaji', 1),
                new Ingredient('Coriander', 1)
            ]),
        new Recipe('Cheese Pav Bhajji',
            'Special Pav Bhajji',
            'https://previews.123rf.com/images/csstockimages/csstockimages1710/csstockimages171001097/88101444-indian-traditional-street-food-pav-bhaji.jpg',
            [new Ingredient('Pav', 2),
            new Ingredient('Bhaji', 1),
            new Ingredient('Coriander', 1),
            new Ingredient('Cheese', 1)
            ])
    ];

    constructor(private slService:ShoppingService){

    }
    getRecipeList() {
        return this.recipes.slice()
    }

    addItemsToShoppingList(item:Ingredient[]){
        this.slService.addItems(item)
    }
}