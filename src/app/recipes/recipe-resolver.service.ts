import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })

export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService: DataStorageService,
        private recipeService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipe = this.recipeService.getRecipeList();

        if (recipe.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return recipe
        }
    }

}