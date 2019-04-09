import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;  
  constructor(private shls: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shls.getIngredeients();
    this.subscription = this.shls.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }
  onEditItem(index: number) {
    this.shls.startEditting.next(index);    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
