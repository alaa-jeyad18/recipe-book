import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// import { fir} from "@angular/fire"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule,ToastContainerModule   } from 'ngx-toastr';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { sharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { shoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent    
  ], 
  imports: [   
    BrowserModule,
    BrowserAnimationsModule,  
    HttpClientModule, 
    ToastrModule.forRoot({
      timeOut: 2000     
    }),
    AuthModule,
    sharedModule,
    CoreModule      
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
