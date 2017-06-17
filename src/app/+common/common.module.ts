import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    DynamicModalService,
    ModalDynamicHostDirective,
    ModalDynamicComponent
} from './services/dynamicModal';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        ModalDynamicHostDirective,
        ModalDynamicComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        DynamicModalService
    ],
    exports: [ModalDynamicComponent]
})
export class AppCommonModule {
    // empty
}
