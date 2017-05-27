import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CurrentUser } from './currentUser';

console.log('`AuthenticationModule` bundle loaded asynchronously');

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        CurrentUser
    ]
})
export class AuthenticationModule {
    // etmpty
}
