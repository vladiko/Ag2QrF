import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginCommunicationHelper } from '../services';


@Component({
    selector: 'vladi',
    template: `
    <h1>Hello from vladi Component</h1>        
    <div><span>last click text: </span> {{lastTimeText}}</div>
    <div><span> test from input: </span> {{textFromInput}}</div>
    <div><button (click)="click($event)">click me</button></div>
    <br/>
    <br/>
<label>
User name: 
     <div><input [(ngModel)]="user" /></div>
</label>
<label>
Password: 
     <div><input type="password" [(ngModel)]="password" /></div>
</label>
<div><button (click)="login($event)">Login</button></div>
<div><span>{{loginMessage}}</span></div>  
   
  `
})
export class VladiComponent implements OnInit {
    public localState: any;

    public textFromInput: string = '';

    public lastTimeText: string = '';

    public password: string = '';
    public user: string = '';
    public loginMessage = '';
    constructor(public route: ActivatedRoute, public loginCommunicationHelper: LoginCommunicationHelper) { }
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

    public login(a) {
        this.loginCommunicationHelper.login(this.user, this.password).subscribe((data) => {
            if (data && data.token) {
                this.loginMessage = 'login succeeded';
            } else if (data) {
                this.loginMessage = data;
            } else {
                this.loginMessage = 'login failed';
            }
            this.password = '';
        });
    }
}
