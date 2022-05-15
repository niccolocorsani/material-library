import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <form class="example-form ooeo" >
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>username</mat-label>
        <input matInput placeholder="Ex. Pizza" value="Sushi">
      </mat-form-field>
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>password</mat-label>
        <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
      </mat-form-field>
    </form>
  `,
  styleUrls: ['my-lib.component.scss','../theme.scss'],
  encapsulation: ViewEncapsulation.None  //// Questo serve per incapsulare al meglio anche lo stile di material

})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
