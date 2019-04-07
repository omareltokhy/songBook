import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html'
})
export class AppComponent {

 public appPage = [
 {
 title: 'Home',
 url: '',
 icon: 'home'
 },
 {
 title: 'Tab2Page',
 url: '',
 icon: 'Tab2Page'
 },
 {
  title: 'tab2',
  url: '/tab2',
  icon: 'tab2'
 },
 {
  title: 'tab3',
  url: '/tab3',
  icon: 'tab3'
 },
 ];

 constructor(
 private platform: Platform,
 private splashScreen: SplashScreen,
 private statusBar: StatusBar
 ) {
 this.initializeApp();
 }
 initializeApp() {
 this.platform.ready().then(() => {
 this.statusBar.styleDefault();
 this.splashScreen.hide();
 });
 }
}
