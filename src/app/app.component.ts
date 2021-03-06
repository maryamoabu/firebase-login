import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AngularFire } from 'angularfire2';

import { AuthProvider } from '../providers/auth-provider';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform,
              public af: AngularFire, 
              public authProvider:AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.intialize();
    });
  }

   intialize() {
    this.af.auth.subscribe(auth => {
       if(auth) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
    });
  }
}
