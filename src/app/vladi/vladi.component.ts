import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'vladi',
    template: `
    <h1>Hello from vladi</h1>    
    <div>
    <button (click)="click($event)">click me</button>    
    </div>
    <div><input [(ngModel)]="textFromInput" /></div>
    <div><span>last click text: </span> {{lastTimeText}}</div>
    <div><span> test from input: </span> {{textFromInput}}</div>

  `
})
export class VladiComponent implements OnInit {
    public localState: any;


    public textFromInput: string = '';

    public lastTimeText: string = '';

    constructor(public route: ActivatedRoute) { }
    public ngOnInit(): void {
        this.route
            .data
            .subscribe((data: any) => {
                /**
                 * Your resolved data from route.
                 */
                this.localState = data.yourData;
            });
    }

    public click(a) {
        this.lastTimeText = this.textFromInput;
    }
}
