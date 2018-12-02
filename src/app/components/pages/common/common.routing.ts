import {Routes} from '@angular/router';
import {ChangePasswordComponent} from "./changepassword/changepassword.component";
import {LayoutComponent} from "../../layout/layout.component";
import {AuthGuard} from "../../../services/authguard.service";

export const CommonRoute: Routes = [
    {
        path: 'app',
        component: LayoutComponent,
        children: [
            {
                path: 'change-password', component: ChangePasswordComponent
            },
            {
              path: 'file-management',
              loadChildren: './file-manage/file-manage.module#FileManageModule',
            },
            {
              path: 'contact',
              loadChildren: './contact/contact.module#ContactModule',
            },
            {
              path: 'messages',
              loadChildren: './messages/messages.module#MessagesModule',
            },
            {
              path: 'wealth',
              loadChildren: './wealth/wealth.module#WealthModule',
            },
            {
              path: 'finance',
              loadChildren: './finance/finance.module#FinanceModule',
            },
            {
              path: 'fiduciary',
              loadChildren: './fiduciary/fiduciary.module#FiduciaryModule',
            },
            {
              path: 'capital',
              loadChildren: './capital/capital.module#CapitalModule',
            },
            {
              path: 'investors',
              loadChildren: './investors/investors.module#InvestorsModule',
            },
        ],
        resolve: {
            user: AuthGuard
        }
    }
];
