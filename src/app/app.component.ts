/* import 'rxjs/operator/filter';
import 'rxjs/operator/map';
import 'rxjs/operator/mergeMap'; */

import { Component, OnInit } from '@angular/core';
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
        //console.log(this.activatedRoute.firstChild.data.value.title);

        this.titleService.setTitle(this.activatedRoute.firstChild.data.value.title);
        
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }
  });
  }
}
