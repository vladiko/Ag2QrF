import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { UsersCommunicationHelper } from '../../+communication';

@Injectable()
export class UserService {
    public users: any;
    constructor(private usersCommunicationHelper: UsersCommunicationHelper) {

    }

    public getUsers() {
        return this.usersCommunicationHelper.getUsers();
    }

}
