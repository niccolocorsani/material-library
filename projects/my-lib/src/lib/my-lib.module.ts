import {NgModule} from '@angular/core';
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialExampleModule} from "../material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AutoCompleteComponent} from "./auto-complete.component";
import {SpinnerComponent} from './spinner.component';
import { InputErrorHandlingComponent } from './input-error-handling.component';
import { InputPasswordComponent } from './input-password.component';
import { NormalInputComponent } from './normal-input.component';


@NgModule({
    declarations: [

        AutoCompleteComponent,
        SpinnerComponent,
        InputErrorHandlingComponent,
        InputPasswordComponent,
        NormalInputComponent,

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

        AutoCompleteComponent,
        SpinnerComponent,
        InputErrorHandlingComponent,
        InputPasswordComponent,
        NormalInputComponent

    ]
})
export class MyLibModule {
}
