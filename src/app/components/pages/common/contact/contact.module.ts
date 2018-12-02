/**
 * Created by Alex on 5/21/2018.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ContactRoute} from './contact.routing';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ContactRoute),
  ],
  entryComponents: [

  ],
  declarations: [
    ListComponent,
    ContactLayoutComponent,
    SendMailComponent,
    CreateComponent,
    UpdateComponent
  ],
  exports: [

  ],
  providers: [],
})
export class ContactModule {

}
