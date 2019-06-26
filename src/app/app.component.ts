/* import 'rxjs/operator/filter';
import 'rxjs/operator/map';
import 'rxjs/operator/mergeMap'; */

import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Hoxro | Legal Management Software";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //let pageTitle = this.router.routerState.snapshot.root.children[0].data['title'];
        //console.log(this.activatedRoute.firstChild.data.value.title);

        //this.titleService.setTitle(this.activatedRoute.firstChild.data.value.title);
        
        //$("html, body").animate({ scrollTop: 0 }, "slow");

        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
        this.titleService.setTitle(title);
      }
    });

    /* this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.router)
      .subscribe((event) => {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
        this.titleService.setTitle(title);
      }
      ); */
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
