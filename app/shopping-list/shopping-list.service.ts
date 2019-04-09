import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditting = new Subject<number>()
  ingredeients: Ingredient[] = [
    new Ingredient('Apple',2),
    new Ingredient('potatos',3)    
  ]
  constructor() { }

  getIngredeient(index: number){
    return this.ingredeients[index]
  }
  getIngredeients() {
    return this.ingredeients.slice()
  }
  addIngredeient(ingredient: Ingredient) {
    this.ingredeients.push(ingredient)
    this.ingredientsChanged.next(this.ingredeients.slice())
  }
  addIngredeients(ingredeients: Ingredient[]){
    this.ingredeients.push(...ingredeients);
    this.ingredientsChanged.next(this.ingredeients.slice())
  }

  // addIngredeients(ingredients: Ingredient[]) {
  //   this.ingredeients.push(...ingredients);
  //   this.ingredientsChanged.next(this.ingredeients.slice())
  // }
  updateIngredient(index:number, ingredient: Ingredient){
    this.ingredeients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredeients.slice())
  }
  deleteIngredeient(index: number){
    this.ingredeients.splice(index,1);
    this.ingredientsChanged.next(this.ingredeients.slice())
  }
}
