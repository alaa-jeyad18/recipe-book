import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
// import  firebase  from '@firebase/app';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'recipe-book';
  
  constructor(private authService: AuthService) {
    
  }
ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyA0n32Bfeo4xuQC0dDtJ_iPlU1cErY2COE",
    authDomain: "recipe-book-ec1dc.firebaseapp.com"
  })
}
isAuthenticated(){
  return  this.authService.isAuthenticated()
 }
}
