import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any[];

  constructor(private ContactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.ContactsService.getContacts();
  }

}
