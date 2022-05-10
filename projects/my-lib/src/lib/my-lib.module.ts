import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {MaterialExampleModule} from "../../../../src/material.module";
import {MatNativeDateModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";






@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    MaterialExampleModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,

  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
