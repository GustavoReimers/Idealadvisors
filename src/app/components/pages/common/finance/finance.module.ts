import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FinanceRoute} from './finance.routing';
import {CommonModule} from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FinanceLayoutComponent } from './finance-layout/finance-layout.component';
import { ManagementComponent } from './management/management.component';
import { ServicesComponent } from './services/services.component';
import { MAComponent } from './m-a/m-a.component';
import { LoanFacilitiesComponent } from './loan-facilities/loan-facilities.component';
import { TaxIncentivesComponent } from './tax-incentives/tax-incentives.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( FinanceRoute ),
  ],
  entryComponents: [

  ],
  declarations: [
  AboutUsComponent,
  FinanceLayoutComponent,
  ManagementComponent,
  ServicesComponent,
  MAComponent,
  LoanFacilitiesComponent,
  TaxIncentivesComponent
  ],
  exports: [

  ],
  providers: [],
})
export class FinanceModule {

}
