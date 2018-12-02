/**
 * Created by Alex on 5/21/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OperatorTransactionRoute } from "./transaction.routing";

import { CommonModule } from "@angular/common";
import { OperatorNewCashTransactionComponent } from "./new/newcash/newcash.component";
import { OperatorTransactionLayoutComponent } from "./transaction-layout/transaction-layout.component";
import { OperatorNewFxTransactionComponent } from "./new/newfx/newfx.component";
import { OperatorNewLoanTransactionComponent } from "./new/newloan/newloan.component";
import { OperatorNewDepositTransactionComponent } from "./new/newdeposit/newdeposit.component";
import { OperatorNewSecurityTransactionComponent } from "./new/newsecurity/newsecurity.component";
import { OperatorEditCashTransactionComponent } from './edit/editcash/editcash.component';
import { OperatorEditDepositTransactionComponent } from './edit/editdeposit/editdeposit.component';
import { OperatorEditFxTransactionComponent } from './edit/editfx/editfx.component';
import { OperatorEditLoanTransactionComponent } from './edit/editloan/editloan.component';
import { OperatorEditSecurityTransactionComponent } from './edit/editsecurity/editsecurity.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(OperatorTransactionRoute),
    ],
    entryComponents: [

    ],
    declarations: [
        OperatorTransactionLayoutComponent,

        OperatorNewCashTransactionComponent,
        OperatorNewFxTransactionComponent,
        OperatorNewLoanTransactionComponent,
        OperatorNewDepositTransactionComponent,
        OperatorNewSecurityTransactionComponent,

        OperatorEditCashTransactionComponent,
        OperatorEditDepositTransactionComponent,
        OperatorEditFxTransactionComponent,
        OperatorEditLoanTransactionComponent,
        OperatorEditSecurityTransactionComponent
    ],
    exports: [
        OperatorTransactionLayoutComponent,

        OperatorNewCashTransactionComponent,
        OperatorNewFxTransactionComponent,
        OperatorNewLoanTransactionComponent,
        OperatorNewDepositTransactionComponent,
        OperatorNewSecurityTransactionComponent,

        OperatorEditCashTransactionComponent,
        OperatorEditDepositTransactionComponent,
        OperatorEditFxTransactionComponent,
        OperatorEditLoanTransactionComponent,
        OperatorEditSecurityTransactionComponent
    ],
    providers: [],
})
export class OperatorTransactionModule {

}
