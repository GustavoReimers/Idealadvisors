import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CapitalRoute} from './capital.routing';
import {CommonModule} from '@angular/common';
import { CapitalLayoutComponent } from './capital-layout/capital-layout.component';
import { FundComponent } from './fund/fund.component';
import { LicensingComponent } from './licensing/licensing.component';
import { EamRelationsComponent } from './eam-relations/eam-relations.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( CapitalRoute ),
  ],
  entryComponents: [

  ],
  declarations: [

  CapitalLayoutComponent,

  FundComponent,

  LicensingComponent,

  EamRelationsComponent],
  exports: [

  ],
  providers: [],
})
export class CapitalModule {

}
