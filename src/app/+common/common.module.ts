import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { DynamicModalComponent } from './dynamicModal/dynamicModal.component';
// import { ModalDynamicComponent } from './services/dynamicModal/modalDynamic.component';
import {
    DynamicModalService,
    ModalDynamicHostDirective,
    ModalDynamicComponent
} from './services/dynamicModal';

// console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        ModalDynamicHostDirective,
        ModalDynamicComponent
        // DynamicModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule// ,
        // RouterModule.forChild(routes),
    ],
    providers: [
        DynamicModalService
    ],
    exports: [ModalDynamicComponent]
})
export class AppCommonModule {
    // empty
}
