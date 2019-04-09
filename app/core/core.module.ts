import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HeaderComponent } from '../core/header/header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../core/footer/footer.component';
import { DropdownDirective } from "../shared/dropdown.directive";
import { AppRoutingModule } from "../app-routing.module";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { loggingInterceptor } from "../shared/logging-interceptor";
import { sharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ShellComponent } from "../shell/shell.component";


@NgModule({
    declarations: [        
        HeaderComponent,   
        ShellComponent,
        HomeComponent,   
        FooterComponent       
    ],
    imports: [       
        CommonModule,
        sharedModule,
        CarouselModule.forRoot(),
        AppRoutingModule
    ],
    exports: [              
        AppRoutingModule,        
        HeaderComponent, 
        FooterComponent        
    ],
    providers:[
        {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide:HTTP_INTERCEPTORS, useClass: loggingInterceptor, multi: true}
    ]
})

export class CoreModule { }