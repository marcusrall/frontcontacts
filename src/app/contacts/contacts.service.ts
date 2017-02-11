import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  getContacts(){
    return [
      {id: 1, name: 'Marcus Almeida', company: 'Web Rall', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 2, name: 'Maria da Silva', company: 'Coca Cola', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 3, name: 'Jorge Alves', company: 'Apple', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 4, name: 'Paulo Rodolfo', company: 'Life Sistema', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 5, name: 'Caio de Souza', company: 'Samsung', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 6, name: 'Antonia Aquino', company: 'Web Rall', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' }
    ];
  }

  getContact(id: number){
    let contacts = this.getContacts();

    for(let i=0; i<contacts.length; i++)
    {
        let contact = contacts[i];
        if(contact.id == id)
        {
          console.log(contact);
          return contact;
        }
        return null;
    }
  }

  constructor() { }


}
