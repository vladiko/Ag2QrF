import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from '../+authentication';
import { LoginCommunicationHelper } from './loginCommunicationHelper/loginCommunicationHelper';
import { UsersCommunicationHelper } from './usersCommunicationHelper/usersCommunicationHelper';

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
        LoginCommunicationHelper,
        UsersCommunicationHelper
    ]
})
export class CommunicationModule {
    // etmpty
}
