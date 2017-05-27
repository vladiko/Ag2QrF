import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from '../+authentication';
import { LoginCommunicationHelper } from './loginCommunicationHelper/loginCommunicationHelper';
import {
    NgModule
} from '@angular/core';

console.log('`Communication Module` bundle loaded asynchronously');

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationModule
    ],
    providers: [
        LoginCommunicationHelper
    ]
})
export class CommunicationModule {
    // etmpty
}
