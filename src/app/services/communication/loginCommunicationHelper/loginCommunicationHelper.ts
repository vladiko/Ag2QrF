import { Injectable } from '@angular/core';
import { CurrentUser } from '../../currentUser/currentUser';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// export type InternalStateType = {

// };

@Injectable()
export class LoginCommunicationHelper {
    private url = 'http://qrnewapi.azurewebsites.net/user/login';
    constructor(public currentUser: CurrentUser, private http: Http) {
        console.log('tst: ' + JSON.stringify(currentUser));
        console.log('http: ' + JSON.stringify(http));
    }

    public login(userName: string, userPassword: string) {
        return this.http.post(this.url, { username: userName, password: userPassword }).map((res: Response) => {
            let data = res.json();
            if (data.gotToken) {
                this.currentUser.token = data.token;
                this.currentUser.userName = userName;
                return this.currentUser;
            } else {
                return null;
            }
        });
        // .subscribe((data) => {
        //     if (data.gotToken) {
        //         this.currentUser.token = data.token;
        //         this.currentUser.userName = userName;
        //     }
        // });
    }
}
