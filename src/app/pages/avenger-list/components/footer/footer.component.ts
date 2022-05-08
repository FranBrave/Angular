import { Component, OnInit } from '@angular/core';

// interface ISocialNetwork {
//   name: string;
//   url: string;
//   img: string;
// }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // public socialNetworks: ISocialNetwork[] = [
  //   name: 'facebook', url: 'https://www.facebook.com', img: './'
  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
