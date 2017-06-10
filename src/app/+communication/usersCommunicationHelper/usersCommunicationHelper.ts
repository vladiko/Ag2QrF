import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommunicationConstants } from '../constants/communicationConstants';
import { CurrentUser } from '../../+authentication';

@Injectable()
export class UsersCommunicationHelper {
    constructor(public currentUser: CurrentUser, private http: Http) { }

    public delete(userName: string) {
        return this.http.delete(
            [CommunicationConstants.USERS_URL,
                '/',
                userName,
                '?token=',
            this.currentUser.token,
                `&username=`,
            this.currentUser.userName].join('')
        ).map((res: Response) => {
            let data = res.json();
            return data;
        });
    }

    public getUsers() {
        return this.http.get(
            [CommunicationConstants.USERS_URL,
                '?token=',
            this.currentUser.token,
                `&username=`,
            this.currentUser.userName].join('')
        ).map((res: Response) => {
            let data = res.json();
            return data;
        });

    }
}
