import { Injectable } from '@angular/core';
import { DynamicAreaComponent } from './dynamicArea.component';

@Injectable()
export class DynamicAreaService {
    private da: DynamicAreaComponent;

    private promise: Promise<any>;
    private resolve;
    private reject;
    private instance;


    public initDynamicArea(da: DynamicAreaComponent) {
        this.da = da;
    }

    public ok() {
        this.resolve(this.instance);
        this.cleanAll();
    }

    public cancel() {
        this.reject(this.instance);
        this.cleanAll();
    }


    public open<T>(
        type: new (...args: any[]) => any,
        bindings?: { [key: string]: any }
    ) {
        if (this.reject) {
            this.reject('error: another popup is open');
            this.cleanAll();
        }
        this.instance = this.da.loadComponent(type);
        if (bindings) {
            let keys = Object.keys(bindings);
            keys.forEach((element) => {
                this.instance[element] = bindings[element];
            });
        }
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        return this.promise;
    }

    private cleanAll() {
        this.reject = null;
        this.resolve = null;
        this.instance = null;
        this.promise = null;
    }
}