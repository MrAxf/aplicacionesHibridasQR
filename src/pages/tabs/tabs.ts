import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EscaneosPage } from '../escaneos/escaneos';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabHome: any;
  tabEscaneos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabHome = HomePage;
    this.tabEscaneos = EscaneosPage;
  }
}
