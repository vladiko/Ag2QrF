import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ComponentFactoryResolver
} from '@angular/core';
import { DynamicDirective } from './dynamic.derective';
import { UserEditComponent } from '../+admin/components/userEdit/userEdit.component';
import { AboutComponent } from '../about/index';
import { DynamicAreaService } from './dynamiArea.service';
@Component({
    selector: 'dynamic-area',
    styleUrls: [
        './dynamicArea.component.css'
    ],
    templateUrl: './dynamicArea.component.html'

})
export class DynamicAreaComponent implements AfterViewInit, OnDestroy {
    //   @Input() ads: AdItem[];
    //   currentAddIndex: number = -1;
    @ViewChild(DynamicDirective) public dynamicHost: DynamicDirective;
    public a = true;
    public isOpen = false;
    public shown = false;


    private subscription: any;
    private interval: any;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private dynamicAreaService: DynamicAreaService) {
        this.dynamicAreaService.initDynamicArea(this);
    }

    public load() {
        this.dynamicAreaService.open<AboutComponent>(UserEditComponent, { data: 'vladi2' }).then((instance: any) => {
            alert(instance.data);
        }, (instance) => {
            alert('rejected: ' + instance.data);
        });
        this.isOpen = true;
    }

    public ngAfterViewInit() {
          this.interval = setInterval(() => {
            this.shown = !this.shown;
        }, 5000);
        // this.loadComponent();
        // this.getAds();
    }

    public ngOnDestroy() {
        // clearInterval(this.interval);
    }

    public clean() {
        let viewContainerRef = this.dynamicHost.viewContainerRef;
        viewContainerRef.clear();
        this.isOpen = false;
    }

    public ok() {
        this.dynamicAreaService.ok();
        this.clean();
    }

    public cancel() {
        this.dynamicAreaService.cancel();
        this.clean();
    }

    public loadComponent(a: any, bindings?: { [key: string]: any }) {
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(a);
        let viewContainerRef = this.dynamicHost.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        return componentRef.instance;
    }
    // public getAds() {
    //     this.interval = setInterval(() => {
    //         this.loadComponent(this.a);
    //         this.a = !this.a;
    //     }, 5000);
    // }
}