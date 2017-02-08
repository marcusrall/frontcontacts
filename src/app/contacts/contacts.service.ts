import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  getContacts(){
    return [
      {id: 1, name: 'Marcus Almeida', company: 'Web Rall', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 1, name: 'Maria da Silva', company: 'Coca Cola', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 1, name: 'Jorge Alves', company: 'Apple', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 1, name: 'Paulo Rodolfo', company: 'Life Sistema', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 1, name: 'Caio de Souza', company: 'Samsung', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' },
      {id: 1, name: 'Antonia Aquino', company: 'Web Rall', email: 'contato@webrall.com', phone: '63 3312-1221', eddress: 'Rua 14 de Novembro' }
    ];
  }

  constructor() { }


}
