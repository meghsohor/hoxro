import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const navLinks: any = document.querySelectorAll('.nav-link');
    const dropdownTogglers:any = document.querySelectorAll('.dropdown-toggle');
    const navbarToggler:any = document.querySelector('.navbar-toggler');

    document.addEventListener('click', function (e) {
      //console.log((e.target.classList).includes('dropdown-toggle'));
      if(dropdownTogglers.length) {
        dropdownTogglers.forEach(dropdownToggler => {
          dropdownToggler.nextSibling.classList.remove('show');
      });
      navbarToggler.nextSibling.classList.remove('show');
      }
    });
    
    navLinks.forEach(navLink => navLink.addEventListener('click', function(e){
        navLinks.forEach (navLink => navLink.classList.remove('active'));
        this.classList.toggle('active');
    }));
    
    dropdownTogglers.forEach(dropdownToggler => dropdownToggler.addEventListener('click', function(e){
        dropdownTogglers.forEach(dropdownToggler => dropdownToggler.classList.remove('show'));
        e.stopPropagation();
        this.nextSibling.classList.toggle('show');
    }));
    
    navbarToggler.addEventListener('click', function(e) {
        e.stopPropagation();
        navbarToggler.nextSibling.classList.toggle('show');
    });

    /*------------ Following code is for Fixed header --------------*/
    const nav:any = document.querySelector('.header-nav-section');
    let topOfNav:any = nav.offsetTop;

    function fixNav() {
        if (window.scrollY >= topOfNav) {
            document.body.style.paddingTop = nav.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
        } else {
            document.body.classList.remove('fixed-nav');
            document.body.style.paddingTop = '0';
        }
    }

    window.addEventListener('scroll', fixNav);
  }

}
