import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-wrapper',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class FeatureWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
