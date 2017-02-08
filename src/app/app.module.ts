import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { routing } from './app.routing';
import { CategoriesComponent } from './categories/categories.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';

import { ContactsService } from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContactsComponent,
    CategoriesComponent,
    DetailContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
