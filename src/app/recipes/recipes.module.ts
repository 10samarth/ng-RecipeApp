import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailsComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        
    ],
    imports:[
        RouterModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ],

})
export class RecipesModule{}