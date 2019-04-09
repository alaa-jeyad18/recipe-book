import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';
import { shoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShellComponent } from './shell/shell.component';


const routes: Routes = [
  
  { path: '', component: ShellComponent,children: [
    { path: '',redirectTo:'/home',pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},  
    { path: 'shoppingList', loadChildren:'./shopping-list/shopping-list.module#shoppingListModule', canLoad: [AuthGuard]},
    { path: '**', component: HomeComponent },
  ] }  
];
const routerOption: ExtraOptions = {
  anchorScrolling: 'enabled',
  useHash: true,
  preloadingStrategy:PreloadAllModules
}
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
