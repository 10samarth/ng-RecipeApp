import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipeList();
        this.http.put(
            'https://recipebook2020-a75e5.firebaseio.com/recipes.json',
            recipes
        )
            .subscribe(
                response => {
                    //console.log(response)
                }
            )
    }

    fetchRecipes() {

        return this.http.get<Recipe[]>(
            'https://recipebook2020-a75e5.firebaseio.com/recipes.json'
        ).pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }),
            tap(recipes => {
                this.recipeService.setRecipe(recipes);
            })
        )
    }
}