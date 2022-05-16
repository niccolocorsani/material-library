import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "./input-error-handling.component";

@Component({
    selector: 'lib-normal-input',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{item}}</mat-label>
            <input matInput (keyup)="addNewItem(newItem.value)" #newItem>
        </mat-form-field>
  `,
    styleUrls: ['my-lib.component.scss','../theme.scss'],
})
export class NormalInputComponent implements OnInit {


    @Input() item = '';


    @Output() newItemEvent = new EventEmitter<string>();
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    matcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit(): void {
    }

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

}
