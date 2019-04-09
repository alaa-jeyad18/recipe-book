import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { AuthGuard } from '.././auth/auth-guard.service';
import { RecipesComponent } from '.././recipes/recipes.component';
import { RecipeComponent } from '.././recipes/recipe/recipe.component';
import { RecipeEditComponent } from '.././recipes/recipe-edit/recipe-edit.component';

const recipesRoutes: Route[] = [
    { path: '', component: RecipesComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },

]

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule{ }