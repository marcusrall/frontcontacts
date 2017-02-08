import { Routes } from '@angular/core';
import { ModuleWithProviders, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const APP_ROUTES: Routes = [

  {  path: '', component: ContactsComponent },
  {  path: 'sidebar', component: SidebarComponent }

];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
