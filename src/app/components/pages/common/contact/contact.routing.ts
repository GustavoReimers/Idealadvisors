import {Routes, RouterModule} from '@angular/router';
import {ContactLayoutComponent} from './contact-layout/contact-layout.component';
import {ListComponent} from './list/list.component';
import {SendMailComponent} from './send-mail/send-mail.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';

export const ContactRoute: Routes = [
  {
    path: '', component: ContactLayoutComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'send-mail',
        component: SendMailComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'update/:contactId',
        component: UpdateComponent
      }
    ]
  }
];
