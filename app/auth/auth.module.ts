import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from '.././auth/login/login.component';
import { SignupComponent } from '.././auth/signup/signup.component';

import { AuthRoutingModule } from "./auth-routing.module";
import { sharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,  
        sharedModule,
        AuthRoutingModule
    ]
})

export class AuthModule { }