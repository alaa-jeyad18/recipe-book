import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('shoppingForm') slForm: NgForm;
subscription: Subscription;
editMode= false;
editedItemIndex: number;
editedItem: Ingredient;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingList.startEditting.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex= index;
        this.editedItem = this.shoppingList.getIngredeient(index);
        this.slForm.setValue({
          "name":this.editedItem.name,
          "amount":this.editedItem.amount
        })
      }
    )
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);    
    if(this.editMode){
      this.shoppingList.updateIngredient(this.editedItemIndex, newIngredient)
    }else{
      this.shoppingList.addIngredeient(newIngredient);
    }   
   this.slForm.reset();
   this.editMode= false;
  }
  onDelete(){
    this.shoppingList.deleteIngredeient(this.editedItemIndex);
    this.onClear()
  }
  onClear(){
    this.slForm.reset();
    this.editMode= false;
  }
}
