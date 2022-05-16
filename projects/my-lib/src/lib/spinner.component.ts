import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-spinner',
  template: '<mat-spinner></mat-spinner>',
  styleUrls: ['my-lib.component.scss','../theme.scss'],
  encapsulation: ViewEncapsulation.None  //// Questo serve per incapsulare al meglio anche lo stile di material

})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
