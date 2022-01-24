import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../../shared/alert/alert.component";
import {PlaceholderDirective} from "../../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void { }
  ngOnDestroy(): void {
    if (this.closeSub){
      this.closeSub.unsubscribe()
    }
  }

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
      this.showErrorAlert(errorMessage);
      console.log(this.error);
    });
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(
      () => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      }
    )
  }

}
