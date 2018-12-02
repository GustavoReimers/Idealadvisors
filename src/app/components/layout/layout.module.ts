/**
 * Created by ApolloYr on 2/5/2018.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {LayoutComponent} from "./layout.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    entryComponents: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        LayoutComponent
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        LayoutComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        LayoutComponent
    ],
    providers: [],
})
export class LayoutModule {

}
