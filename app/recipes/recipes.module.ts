import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ModalModule } from 'ngx-bootstrap/modal';


import { RecipesComponent } from '.././recipes/recipes.component';
import { RecipeComponent } from '.././recipes/recipe/recipe.component';
import { RecipeEditComponent } from '.././recipes/recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from "./recipes-routing.module"
import { sharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations:[       
        RecipesComponent,
        RecipeComponent,
        RecipeEditComponent
    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        ModalModule.forRoot(),
        RecipesRoutingModule,
        sharedModule,
     
    ]
})

export class RecipesModule{}