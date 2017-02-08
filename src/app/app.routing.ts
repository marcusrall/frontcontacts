import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';


const APP_ROUTES: Routes = [
  {  path: '', component: ContactsComponent },
  {  path: 'contacts', component: ContactsComponent },
  {  path: 'contact/:id', component: DetailContactComponent },
  {  path: 'categories', component: CategoriesComponent }
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
