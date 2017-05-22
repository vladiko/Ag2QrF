import { Injectable } from '@angular/core';
import { CurrentUser } from '../../currentUser/currentUser';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommunicationConstants } from '../communicationConstants';
// export type InternalStateType = {

// };

@Injectable()
export class LoginCommunicationHelper {
    constructor(public currentUser: CurrentUser, private http: Http) { }

    public login(userName: string, userPassword: string) {
        return this.http.post(
            CommunicationConstants.LOGIN_URL,
            { username: userName, password: userPassword }
        ).map((res: Response) => {
            let data = res.json();
            if (data.gotToken) {
                this.currentUser.token = data.token;
                this.currentUser.userName = userName;
                this.currentUser.userRoles = data.roles;
                if (data.role && this.currentUser.userRoles.indexOf(data.role) < 0) {
                    this.currentUser.userRoles.push(data.role);
                }
                return this.currentUser;
            } else {
                return data.message;
            }
        });
    }
}
