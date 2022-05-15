import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-spinner',
  template: '<mat-spinner></mat-spinner>',
  styleUrls: ['my-lib.component.scss','../theme.scss'],
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
