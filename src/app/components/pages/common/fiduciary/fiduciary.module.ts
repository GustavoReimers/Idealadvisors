import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FiduciaryRoute} from './fiduciary.routing';
import {CommonModule} from '@angular/common';
import { FiduciaryLayoutComponent } from './fiduciary/fiduciary-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagementComponent } from './management/management.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { FormsComponent } from './forms/forms.component';
import { EFiduciaryComponent } from './e-fiduciary/e-fiduciary.component';
import { EBillingComponent } from './e-billing/e-billing.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( FiduciaryRoute ),
  ],
  entryComponents: [

  ],
  declarations: [

  FiduciaryLayoutComponent,

  AboutUsComponent,

  ManagementComponent,

  PriceListComponent,

  ComparisonComponent,

  FormsComponent,

  EFiduciaryComponent,

  EBillingComponent],
  exports: [

  ],
  providers: [],
})
export class FiduciaryModule {

}
