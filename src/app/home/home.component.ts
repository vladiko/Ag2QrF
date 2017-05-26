import {
  Component,
  OnInit
} from '@angular/core';

import { XLargeDirective } from './x-large';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
  ) {
    // empty 
  }

  public ngOnInit() {
    // console.log('hello `Home` component');
  }
}
