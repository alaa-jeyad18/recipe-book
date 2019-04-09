import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model"
import { Ingredient } from "./ingredient.model"
import { Subject } from 'rxjs';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

recipesChanges = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    {
      name: 'meat',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagePath:'../assets/images/food-1.jpg',
      ingredients:[
        {
          name:'rice',
          amount: 1
        },
        {
          name:'potatos',
          amount: 2
        }
      ]
    },
    {
      name: 'Chicken',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagePath:'../assets/images/food-7.jpg',
      ingredients:[
        {
          name:'rice',
         amount: 2
        }
      ]
    },
    {
      name: 'fruit',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagePath:'../assets/images/food-8.jpg',
      ingredients:[
        {
          name:'rice',
          amount:3
        }
      ]
    }
  ]
  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(newRecipes: Recipe[]){
    this.recipes = newRecipes;
    this.recipesChanges.next(this.recipes.slice())
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index]
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice())
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredeients(ingredients)
  }

  updateRecipe(index:number, recipe: Recipe){
    this.recipes[index]= recipe;
    this.recipesChanges.next(this.recipes.slice())
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanges.next(this.recipes.slice())
  }
}
