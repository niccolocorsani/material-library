import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "./input-error-handling.component";

@Component({
    selector: 'lib-input-password',
    template: `
        <form class="example-form" style="background-color: white">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Password</mat-label>
                <input matInput [type]="hide ? 'password' : 'text'" (keyup)="addNewItem(newItem.value)"
                       value="{{input_value}}" #newItem>
                <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'"
                        [attr.aria-pressed]="hide">
                </button>
            </mat-form-field>
        </form>
    `,
    styleUrls: ['my-lib.component.scss', '../theme.scss'],
    encapsulation: ViewEncapsulation.None  //// Questo serve per incapsulare al meglio anche lo stile di material

})
export class InputPasswordComponent implements OnInit {


    hide = true


    @Output() newItemEvent = new EventEmitter<string>();
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    matcher = new MyErrorStateMatcher();

    @Input() input_value: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

}
