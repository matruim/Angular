import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
    // this.signupForm.valueChanges.subscribe((value) =>{
    //   console.log(value);
    // });
    // this.signupForm.statusChanges.subscribe(value => {
    //   console.log(value);
    // })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobbies() {
    const control = new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames = (control: FormControl): { [s: string]: boolean } => {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
