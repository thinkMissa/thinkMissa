import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'white-logo',
  templateUrl: './white-logo.component.html'
})
export class WhiteLogoComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

}
