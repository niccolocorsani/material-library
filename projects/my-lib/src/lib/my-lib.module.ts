import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {MatNativeDateModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialExampleModule} from "../material.module";


@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    MaterialExampleModule,
    MatNativeDateModule,
    ReactiveFormsModule,

  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
