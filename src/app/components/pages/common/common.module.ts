/**
 * Created by ApolloYr on 5/10/2018.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ChangePasswordComponent} from './changepassword/changepassword.component';
import {CommonRoute} from './common.routing';
import {LayoutModule} from '../../layout/layout.module';
import {ContactModule} from './contact/contact.module';
import {MessagesModule} from 'primeng/primeng';
import {WealthModule} from './wealth/wealth.module';
import {FinanceModule} from './finance/finance.module';
import {FiduciaryModule} from './fiduciary/fiduciary.module';
import {CapitalModule} from './capital/capital.module';
import {InvestorsModule} from './investors/investors.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(CommonRoute),
        ContactModule,
        LayoutModule,
        MessagesModule,
        WealthModule,
        FinanceModule,
        FiduciaryModule,
        CapitalModule,
        InvestorsModule
    ],
    entryComponents: [],
    declarations: [
        ChangePasswordComponent,
    ],
    exports: [
        ChangePasswordComponent,

    ],
    providers: [],
})
export class AppCommonModule {

}
