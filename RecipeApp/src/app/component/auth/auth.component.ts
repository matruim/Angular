import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error = null;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    this.error = null;
  }

  onSubmit(form: NgForm) {
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    this.error = null;
    const {email, password} = form.value;
    if (this.isLoginMode){
      authObs = this.authService.loginRequest(email, password);
    }else{
      authObs = this.authService.signupRequest(email, password)
    }

    authObs.subscribe(data => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    },errorMessage => {
      this.isLoading = false;
      this.error = errorMessage;
      console.log(this.error);
    });
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
