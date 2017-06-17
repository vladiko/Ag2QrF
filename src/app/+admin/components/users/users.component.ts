import {
    Component,
    OnInit,
    AfterViewInit,
    ViewContainerRef,
} from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { UserService } from '../../services/users.service';
import { CurrentUser } from '../../../+authentication';
import { DynamicModalService } from '../../../+common/index';
import { UserEditComponent } from '../userEdit/userEdit.component';

@Component({
    selector: 'users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, AfterViewInit {

    public users;
    constructor(
        public userService: UserService,
        public dynamicModalService: DynamicModalService,
        // tslint:disable-next-line:align
        public currentUser: CurrentUser,
        // tslint:disable-next-line:align
        overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
    }

    public ngOnInit() {
        console.log('hello `Users` component');
    }
    public ngAfterViewInit(): void {
        this.userService.getUsers().subscribe((d) => {
            this.users = d;
        }, (err) => {
            this.currentUser.token = null;
            this.currentUser.userName = null;
            this.currentUser.userRoles = null;
            console.log(JSON.stringify(err));
        });
    }

    public removeItem(user) {
        this.onClick(user);
    }

    public onClick(user) {
        this.modal.confirm().okBtn('Delete')
            .size('lg')
            .showClose(true)
            .title('Confirmation!')
            .message(`
            <h3>Your are going to delete: ${user.username}. Are you sure? </h3>`).open().then((res) => {
                res.result.then((r) => {
                    let a = r;
                    this.userService.deleletUser(user.username).subscribe((delUser) => {
                        this.userService.getUsers().subscribe((d) => {
                            this.users = d;
                        }, (err) => {
                            this.currentUser.token = null;
                            this.currentUser.userName = null;
                            this.currentUser.userRoles = null;
                            console.log(JSON.stringify(err));
                        });

                    });
                    // todo remove user

                }, (e) => {
                    let ee = e;
                });
            }, (rej) => {
                // todo - popup did not succed to open
            });
    }

    public editUser(user) {
        this.dynamicModalService.open(UserEditComponent, { data: 'vladi' }).then((s) => {
            alert('userName: ' + user.username + ' get data ' + s.data);
        }, (f) => {
            alert('ddffdd');
        });
    }
}
