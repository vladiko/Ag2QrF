import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

// console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        UsersComponent,
    ],
    imports: [
        CommonModule,
        FormsModule// ,
        // RouterModule.forChild(routes),
    ],
})
export class AdminModule {
    // empty
}
