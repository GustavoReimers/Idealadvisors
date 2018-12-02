/**
 * Created by Alex on 5/21/2018.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ContactRoute} from './messages.routing';
import {CommonModule} from '@angular/common';
import { MessagingLayoutComponent } from './messaging-layout/messaging-layout.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { OutboxComponent } from './outbox/outbox.component';
import { TrashComponent } from './trash/trash.component';
import { ViewComponent } from './view/view.component';
import { ReplyComponent } from './reply/reply.component';


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

  MessagingLayoutComponent,

  InboxComponent,

  ComposeComponent,

  OutboxComponent,

  TrashComponent,

  ViewComponent,

  ReplyComponent],
  exports: [

  ],
  providers: [],
})
export class MessagesModule {

}
