import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public mdn: string;
  public w3: string;
  public google: string;

  constructor() { }

  ngOnInit() {

  }
  keyDownMdn(event) {
    if (event.keyCode === 13) {
      window.open(`https://developer.mozilla.org/en-US/search?q=${this.mdn}&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=canvas&topic=svg&topic=webgl&topic=mobile&topic=webdev&topic=http&topic=webext&topic=standards`);
      this.mdn = '';
    }
  }
  keyDownw3(event) {
    if (event.keyCode === 13) {
      window.open('https://www.w3schools.com/'); // w3 not using querys q=.
      this.w3 = '';
    }
  }
  keyDowngoogle(event) {
    if (event.keyCode === 13) {
      window.open(`https://www.google.co.il/search?q=${this.google}&oq=david&aqs=chrome..69i57j69i61l3j69i65l2.830j0j4&sourceid=chrome&ie=UTF-8`);
      this.google = '';
    }
  }
}
