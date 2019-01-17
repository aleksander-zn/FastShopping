import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    /*
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Shopping cart',
      url: '/shopping-cart',
      icon: 'cart'
    }
    */
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.translate.addLangs(['pl']);
      this.translate.setDefaultLang('pl');

      this.translate.get('Shopping cart').subscribe(translation => {
        this.appPages.push({
          title: translation,
          url: '/shopping-cart',
          icon: 'cart'
        });
      });

      this.translate.get('Settings').subscribe(translation => {
        this.appPages.push({
          title: translation,
          url: '/settings',
          icon: 'settings'
        });
      });
    });
  }
}
