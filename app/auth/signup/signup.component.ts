import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import 'rxjs'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authService: AuthService, private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const userEmail = form.value.email;
    const userPassword = form.value.password;
    this.authService.signupUser(userEmail, userPassword)
    // if (this.authService.signupUser(userEmail, userPassword).err.code == "auth/email-already-in-use") {
    //   console.log('email already exist from front')
    //   // res => this.toastr.success("success","new user signup"),
    //   // err => console.log ('err is ' + err)

    // }
  }
  authAlert(){
    return this.authService.alert
  }
}
