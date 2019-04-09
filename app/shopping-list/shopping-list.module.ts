import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from '.././shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '.././shopping-list/shopping-edit/shopping-edit.component';
import { sharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { shoppingListRoutesModule } from "./shopping-list-router.module";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        FormsModule,      
        CommonModule,       
        sharedModule,
        shoppingListRoutesModule,
      
    ]
})

export class shoppingListModule{}