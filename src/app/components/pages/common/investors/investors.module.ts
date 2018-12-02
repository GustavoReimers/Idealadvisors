import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InvestorsRoute} from './investors.routing';
import {CommonModule} from '@angular/common';
import { InvestorsLayoutComponent } from './investors-layout/investors-layout.component';
import { WealthComponent } from './wealth/wealth.component';
import { FinanceComponent } from './finance/finance.component';
import { CapitalComponent } from './capital/capital.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( InvestorsRoute ),
  ],
  entryComponents: [

  ],
  declarations: [

  InvestorsLayoutComponent,

  WealthComponent,

  FinanceComponent,

  CapitalComponent],
  exports: [

  ],
  providers: [],
})
export class InvestorsModule {

}
