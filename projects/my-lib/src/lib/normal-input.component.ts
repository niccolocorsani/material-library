import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "./input-error-handling.component";

@Component({
    selector: 'lib-normal-input',
    template: `
        <form class="example-form">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>{{item}}</mat-label>
                <input matInput value="{{input_value}}"  (keyup)="addNewItem(newItem.value)" #newItem >
            </mat-form-field>
        </form>
    `,
    styleUrls: ['my-lib.component.scss', '../theme.scss'],
    encapsulation: ViewEncapsulation.None  //// Questo serve per incapsulare al meglio anche lo stile di material

})
export class NormalInputComponent implements OnInit {


    @Input() item = '';
    @Input() input_value: string;

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
