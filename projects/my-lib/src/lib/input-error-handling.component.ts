import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Output, EventEmitter} from '@angular/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'lib-input-error-handling',
    template: `
        <form class="example-form">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Email</mat-label>
                <input type="email" matInput [formControl]="emailFormControl" [errorStateMatcher]="matcher"
                       (keyup)="addNewItem(newItem.value)"
                       placeholder="Ex. pat@example.com"  value="{{input_value}}" #newItem>
                <mat-hint></mat-hint>
                <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
                    Digitare un indirizzo E-mail valido
                </mat-error>
                <mat-error *ngIf="emailFormControl.hasError('required')">
                    Email è <strong>richiesta</strong>
                </mat-error>
            </mat-form-field>
        </form>
    `,
    styleUrls: ['my-lib.component.scss', '../theme.scss'],
    encapsulation: ViewEncapsulation.None  //// Questo serve per incapsulare al meglio anche lo stile di material

})
export class InputErrorHandlingComponent {


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
