import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ContactsService } from './../contacts/contacts.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  contact: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {
  console.log(route);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        // this.contact = this.contactsService.getContact(this.id);
        // if(this.contact == null){
        //   this.router.navigate(['/contacts'])
        // }

      }
    );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
