/**
 * Created by Alex on 5/21/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OperatorPortfolioRoute } from './portfolio.routing';
import { OperatorPortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { OperatorClientListComponent } from './client-list/client-list.component';
import { OperatorWaitingOrdersComponent } from './waiting-orders/waiting-orders.component';
import { OperatorPendingTransactionsComponent } from './pending-transactions/pending-transactions.component';
import { OperatorAllTransctionsComponent } from './all-transactions/all-transactions.component';
import { PortfolioShowPage } from './show/portfolio.show.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(OperatorPortfolioRoute)
  ],
  entryComponents: [
    OperatorPortfolioLayoutComponent,
    OperatorClientListComponent
  ],
  declarations: [
    OperatorPortfolioLayoutComponent,
    OperatorClientListComponent,
    OperatorWaitingOrdersComponent,
    OperatorPendingTransactionsComponent,
    OperatorAllTransctionsComponent,
    PortfolioShowPage
  ],
  exports: [
    OperatorPortfolioLayoutComponent,
    OperatorClientListComponent,
    OperatorWaitingOrdersComponent,
    OperatorPendingTransactionsComponent,
    OperatorAllTransctionsComponent
  ],
  providers: []
})
export class OperatorPortfolioModule {}
