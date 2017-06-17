import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-modal-host]',
})
export class ModalDynamicHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}