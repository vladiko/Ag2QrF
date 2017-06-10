/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { CurrentUser } from './+authentication';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  constructor(
    public currentUser: CurrentUser
  ) { }

  public ngOnInit() {
    // emtpy
  }
}
