import { Injectable } from '@angular/core';

// export type InternalStateType = {

// };

@Injectable()
export class CurrentUser {
    public userName: String;
    public userRoles: string[];
    public token: string;
}
