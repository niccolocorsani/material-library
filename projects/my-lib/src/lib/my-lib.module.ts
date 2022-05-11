import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialExampleModule} from "../material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AutoCompleteComponent} from "./auto-complete.component";


@NgModule({
  declarations: [
    MyLibComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    ReactiveFormsModule,

  ],
  exports: [
    MyLibComponent,
    AutoCompleteComponent
  ]
})
export class MyLibModule { }
