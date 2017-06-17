import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ComponentFactoryResolver
} from '@angular/core';
import { DynamicModalService } from './dynamicModal.service';
import { ModalDynamicHostDirective } from './modalDynamicHost.directive';
@Component({
    selector: 'modal-dynamic',
    styleUrls: [
        './modalDynamic.component.css'
    ],
    templateUrl: './modalDynamic.component.html'
})
export class ModalDynamicComponent implements AfterViewInit, OnDestroy {
    @ViewChild(ModalDynamicHostDirective) public dynamicHost: ModalDynamicHostDirective;
    public animClass = 'hidden-modal';
    public title = 'Title test';

    private subscription: any;
    private interval: any;
    private dialogWidth: string;


    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private dynamicModalService: DynamicModalService) {
        this.dynamicModalService.initDynamicModal(this);
    }



    public get isOpen() {
        return this.dynamicModalService.isShown;
    };

    public ngAfterViewInit() {
        //       this.interval = setInterval(() => {
        //         this.shown = !this.shown;
        //     }, 5000);
        //     // this.loadComponent();
        //     // this.getAds();
    }

    public ngOnDestroy() {
        this.clean();
    }

    public clean() {
        let viewContainerRef = this.dynamicHost.viewContainerRef;
        viewContainerRef.clear();
    }

    public ok() {
        this.dynamicModalService.ok();
        this.closeModal()
        this.clean();
    }

    public cancel() {
        this.dynamicModalService.cancel();
        this.closeModal();
        this.clean();
    }

    public loadComponent(a: any, title: string, width: number) {
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(a);
        let viewContainerRef = this.dynamicHost.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        this.title = title;
        this.dialogWidth = width + 'px';
        return componentRef.instance;
    }
    private closeModal() {
        this.animClass = 'collapsed';
        this.dialogWidth = '0';
        setTimeout(() => {
            this.animClass = 'hidden-modal';
        }, 300);
    }
}
