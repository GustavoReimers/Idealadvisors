import {Routes, RouterModule} from '@angular/router';
import {MessagingLayoutComponent} from './messaging-layout/messaging-layout.component';
import {InboxComponent} from './inbox/inbox.component';
import {ComposeComponent} from './compose/compose.component';
import {OutboxComponent} from './outbox/outbox.component';
import {TrashComponent} from './trash/trash.component';
import {ViewComponent} from './view/view.component';
import {ReplyComponent} from './reply/reply.component';

export const ContactRoute: Routes = [
  {
    path: '', component: MessagingLayoutComponent,
    children: [
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'compose',
        component: ComposeComponent
      },
      {
        path: 'outbox',
        component: OutboxComponent
      },
      {
        path: 'trash',
        component: TrashComponent
      },
      {
        path: 'view/:paramId',
        component: ViewComponent
      },
      {
        path: 'reply/:paramId',
        component: ReplyComponent
      }
    ]
  }
];
