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
// import { DynamicDirective } from './dynamic.derective';
// import { UserEditComponent } from '../+admin/components/userEdit/userEdit.component';
// import { AboutComponent } from '../about/index';
// import { DynamicAreaService } from './dynamiArea.service';
@Component({
    selector: 'modal-dynamic',
    styleUrls: [
        './modalDynamic.component.css'
    ],
    templateUrl: './modalDynamic.component.html'
})
export class ModalDynamicComponent implements AfterViewInit, OnDestroy {
    @ViewChild(ModalDynamicHostDirective) public dynamicHost: ModalDynamicHostDirective;
    public a = true;
    public _isOpen = false;
    public shown = false;
    private subscription: any;
    private interval: any;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private dynamicModalService: DynamicModalService) {
        this.dynamicModalService.initDynamicModal(this);
    }

    public get isOpen() {
        return this.dynamicModalService.isShown;
    };
    public load() {
        // this.dynamicModalService.open<AboutComponent>(UserEditComponent, { data: 'vladi2' }).then((instance: any) => {
        //     alert(instance.data);
        // }, (instance) => {
        //     alert('rejected: ' + instance.data);
        // });
        // this.isOpen = true;
    }

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
        this.clean();
    }

    public cancel() {
        this.dynamicModalService.cancel();
        this.clean();
    }

    public loadComponent(a: any, bindings?: { [key: string]: any }) {
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(a);
        let viewContainerRef = this.dynamicHost.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        return componentRef.instance;
    }
}
