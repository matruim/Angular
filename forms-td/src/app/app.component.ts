import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm //use this to see form before submit. for Validation or other tasks.
  defaultQuestion = 'pet'
  answer = ''
  genders = ['male','female']
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({userData:{username: suggestedName, email: ''}, secret: 'pet', questionAnswer: '', gender: 'male'}); // can fill out whole form
    this.signupForm.form.patchValue({userData:{username: suggestedName}}); //can override parts of the form.
  }

  onSubmit(form: NgForm){
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.signupForm.reset();
  }
}
