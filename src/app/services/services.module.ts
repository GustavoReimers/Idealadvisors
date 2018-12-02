/**
 * Created by ApolloYr on 2/5/2018.
 */
import {NgModule} from '@angular/core';
import {SettingsService} from "./setting.service";
import {Api} from "./api.service";
import {AuthGuard} from "./authguard.service";
import {AuthCheck} from "./authcheck.service";
import {ClientApi} from "./clientapi.service";
import {Validate} from "./validate.service";
import {NotifyService} from "./notify.service";
import {MessageService} from 'primeng/components/common/messageservice';

@NgModule({
    imports: [

    ],
    declarations: [],
    providers: [
        SettingsService,
        Api,
        AuthGuard,
        AuthCheck,
        ClientApi,
        Validate,
        NotifyService,
        MessageService
    ],
    exports: [

    ]
})
export class ServicesModule {

}
