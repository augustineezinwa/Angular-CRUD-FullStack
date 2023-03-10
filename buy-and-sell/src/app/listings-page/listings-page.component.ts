import { Component } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit() {
    this.listings = fakeListings;
  }

}
