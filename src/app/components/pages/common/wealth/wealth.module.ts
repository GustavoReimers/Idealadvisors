import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {WealthRoute} from './wealth.routing';
import {CommonModule} from '@angular/common';
import { WealthLayoutComponent } from './wealth-layout/wealth-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( WealthRoute ),
  ],
  entryComponents: [

  ],
  declarations: [
    WealthLayoutComponent,
    AboutUsComponent,
    InfrastructureComponent
  ],
  exports: [

  ],
  providers: [],
})
export class WealthModule {

}
