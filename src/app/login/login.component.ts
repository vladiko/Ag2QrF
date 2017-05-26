import {
    Component,
    OnInit
} from '@angular/core';
import { LoginCommunicationHelper, CurrentUser } from '../services';
@Component({
    selector: 'login',
    styleUrls: [
        './login.component.css'
    ],
    templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
    public password: string = '';
    public user: string = '';
    public loginMessage = '';

    constructor(
        public loginCommunicationHelper: LoginCommunicationHelper,
        public currentUser: CurrentUser
    ) { }

    public ngOnInit() {
        console.log('hello `login` component');
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
