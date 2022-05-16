import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "./input-error-handling.component";

@Component({
    selector: 'lib-input-password',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>Enter your password</mat-label>
            <input matInput [type]="hide ? 'password' : 'text'" (keyup)="addNewItem(newItem.value)" #newItem>
            <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="hide">
                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
            </button>
        </mat-form-field>
    `,
    styleUrls: ['my-lib.component.scss', '../theme.scss'],
})
export class InputPasswordComponent implements OnInit {


    hide = true


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
