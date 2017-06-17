import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {
  AdminModule
} from './+admin';

import {
  AuthenticationModule
} from './+authentication';

import {
  CommunicationModule
} from './+communication';

import {
  AppCommonModule
} from './+common';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';


// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { VladiComponent } from './vladi';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { DynamicDirective } from './dynamicLoading/dynamic.derective';
import { DynamicAreaComponent } from './dynamicLoading/dynamicArea.component';

// import { CurrentUser } from './+authentication';

import '../styles/styles.scss';
import '../styles/headings.css';
import { DynamicAreaService } from './dynamicLoading/dynamiArea.service';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

type StoreType = {
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    VladiComponent,
    HomeComponent,
    LoginComponent,
    NoContentComponent,
    XLargeDirective,
    DynamicDirective,
    DynamicAreaComponent
  ],
  entryComponents: [AboutComponent],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AuthenticationModule,
    CommunicationModule,
    AppCommonModule,
    ModalModule.forRoot(),
    AppCommonModule,
    BootstrapModalModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
    DynamicAreaService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef
  ) { }

  public hmrOnInit(store: StoreType) {
    console.log('HMR store', JSON.stringify(store, null, 2));

    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);

    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
