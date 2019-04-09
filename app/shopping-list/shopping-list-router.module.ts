import { NgModule } from "@angular/core";
import { RouterModule, Route} from "@angular/router";

import { ShoppingListComponent } from '.././shopping-list/shopping-list.component';

const shoppingListRoutes: Route[] = [
    { path:'', component:ShoppingListComponent}
]

@NgModule({    
    imports:[
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class shoppingListRoutesModule{}