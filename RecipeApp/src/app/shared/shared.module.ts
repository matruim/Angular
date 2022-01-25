import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownDirective} from "./dropdown.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";



@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DropdownDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
  ],
})
export class SharedModule { }
