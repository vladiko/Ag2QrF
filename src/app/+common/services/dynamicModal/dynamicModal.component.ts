import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ComponentFactoryResolver
} from '@angular/core';
import { ModalDynamicHostDirective } from './modalDynamicHost.directive';
// import { UserEditComponent } from '../+admin/components/userEdit/userEdit.component';
// import { AboutComponent } from '../about/index';
import { DynamicModalService } from './dynamicModal.service';
@Component({
    selector: 'dynamic-mfodal',
    // styleUrls: [
    //     './dynamicModal.component.css'
    // styleUrls: [
    //     './dynamicModal.component.css'
    // ],
    // templateUrl: './dynamicModal.component.html'
    template: ' s'
})
export class DynamicModalComponent implements AfterViewInit, OnDestroy {
    //   @Input() ads: AdItem[];
    //   currentAddIndex: number = -1;
    //  @ViewChild(DynamicModalHostDirective) public dynamicHost: DynamicModalHostDirective;
    // public a = true;
    // public isOpen = false;
    // public shown = false;


    // private subscription: any;
    // private interval: any;

    // constructor(
    //    // private _componentFactoryResolver: ComponentFactoryResolver,
    //     private DynamicModalService: DynamicModalService
    // ) {
    //     this.DynamicModalService.initDynamicModal(this);
    // }

    // public load() {
    //     this.DynamicModalService.open<AboutComponent>(UserEditComponent, { data: 'vladi2' }).then((instance: any) => {
    //         alert(instance.data);
    //     }, (instance) => {
    //         alert('rejected: ' + instance.data);
    //     });
    //     this.isOpen = true;
    // }

    public ngAfterViewInit() {
        // this.interval = setInterval(() => {
        //     this.shown = !this.shown;
        // }, 5000);
        // this.loadComponent();
        // this.getAds();
    }

    public ngOnDestroy() {
        // clearInterval(this.interval);
    }

    public clean() {
        // let viewContainerRef = this.dynamicHost.viewContainerRef;
        //   viewContainerRef.clear();
        // this.isOpen = false;
    }

    public ok() {
        // this.DynamicModalService.ok();
        // this.clean();
    }

    public cancel() {
        // this.DynamicModalService.cancel();
        // this.clean();
    }

    public loadComponent(a: any, bindings?: { [key: string]: any }) {
        //  let componentFactory = this._componentFactoryResolver.resolveComponentFactory(a);
        //   let viewContainerRef = this.dynamicHost.viewContainerRef;
        // viewContainerRef.clear();
        // let componentRef = viewContainerRef.createComponent(componentFactory);
        // return componentRef.instance;
    }
}