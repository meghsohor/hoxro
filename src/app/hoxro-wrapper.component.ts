import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoxro-wrapper',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class HoxroWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
