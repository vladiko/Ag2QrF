import {
    Component,
    OnInit,
    AfterViewInit,
} from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, AfterViewInit {

    public users;
    constructor(public userService: UserService) {

    }

    public removeItem(user) {
        console.log(`remove user: ${user.username}`);
    }
    public ngOnInit() {
        console.log('hello `Users` component');
    }
    public ngAfterViewInit(): void {
        this.userService.getUsers().subscribe((d) => {
            this.users = d;
        });
    }
}
