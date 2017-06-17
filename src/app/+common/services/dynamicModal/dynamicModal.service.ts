import { Injectable } from '@angular/core';
import { DynamicModalComponent } from './dynamicModal.component';

@Injectable()
export class DynamicModalService {
    private da: DynamicModalComponent;

    private promise: Promise<any>;
    private resolve;
    private reject;
    private instance;
    private _isShown = false;
    public get isShown() {
        return this._isShown;
    }


    public initDynamicModal(da: DynamicModalComponent) {
        this.da = da;
    }

    public ok() {
        this.resolve(this.instance);
        this._isShown = false;
        this.cleanAll();
    }

    public cancel() {
        this.reject(this.instance);
        this._isShown = false;
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
        this._isShown = true;
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