import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    token: string;
    signupErrMessage: string;
    alert: boolean = false;
    alertLogin: boolean = false;
    errMessage: string;

    constructor(private router: Router, private toasterService: ToastrService) { }
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                res => {                  
                    this.toasterService.success("success", "new user signup"),
                    this.router.navigate(["/login"])
                }
            )
            .catch(
                (error) => {                   
                    if (error.code == 'auth/email-already-in-use') {
                        this.signupErrMessage = 'this email already exist';
                        this.alert = true;
                    }
                }
            )
    }
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                err => {
                    console.log(err)
                    this.alertLogin = true;
                    if (err.code == 'auth/wrong-password') {
                        this.errMessage = 'password is incorrect'
                    } else if (err.code == 'auth/user-not-found') {
                        this.errMessage = "user not found"
                    }else{
                        this.errMessage="please enter a valid email and password"
                    }
                }
            )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            )
        return this.token
    }
    isAuthenticated() {
        return this.token != null;
    }
    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/'])
    }
}