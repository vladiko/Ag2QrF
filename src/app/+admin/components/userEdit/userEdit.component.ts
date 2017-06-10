import {
    Component,
    OnInit,
    AfterViewInit,
    ViewContainerRef,
    Input
} from '@angular/core';


@Component({
    selector: 'user-edit',
    templateUrl: './userEdit.component.html'
})
export class UserEditComponent implements OnInit, AfterViewInit {
    @Input() public data: string;

    // public data = 'vladi';

    ngAfterViewInit(): void {
        //throw new Error("Method not implemented.");
    }

    public ngOnInit() {
        //console.log('hello `UsersEdit` component');
    }
}
