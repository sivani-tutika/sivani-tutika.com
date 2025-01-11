import { Component } from '@angular/core';
import contactData from '../../data/contacts.json';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = contactData;

  constructor() {
    // Optional: Log the contact data to verify the structure
    console.log(this.contactData);
  }
}
