import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  message: string = '';
  listing: Listing;
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id) as Listing;
  }

  ngOnInit(): void {
    this.message = `I am interested in your ${this.listing.name}!`;
  }

  sendMessage(): void {
    alert('Your message has been sent');
    this.router.navigateByUrl('/listings');
  }

}
