import {
    Component,
    OnInit
} from '@angular/core';
import { LoginCommunicationHelper } from '../+communication';
import { CurrentUser } from '../+authentication';
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
    ) {

        // this.user = 'vladi2';
        // this.password = '1234';
        // this.login(null);

    }

    public ngOnInit() {
        //console.log('hello `login` component');
    }
    public login(a) {
        this.loginCommunicationHelper.login(this.user, this.password).subscribe((data) => {
            if (data && data.token) {
                this.loginMessage = '';
            } else {
                this.loginMessage = 'login failed';
            }
            this.password = '';
        });
    }

}
