import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mapURL: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1755.7434632477796!2d-0.14254871736505256!3d51.51328538509232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s207+Regent+St%2C+Mayfair%2C+London+W1B+3HH!5e0!3m2!1sen!2sbd!4v1521014917459") 
  }

}
