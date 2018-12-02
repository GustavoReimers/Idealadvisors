import {Routes} from '@angular/router';
import {AuthGuard} from "./services/authguard.service";
import {AuthCheck} from "./services/authcheck.service";

export const AppRoutes: Routes = [

    {path: '**', redirectTo: ''}
];
