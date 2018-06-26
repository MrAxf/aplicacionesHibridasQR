import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat: number; 
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    let coordsArray = this.navParams.get("coords").split(","); 
    this.lat = Number(coordsArray[0].replace("geo:", "")); 
    this.lng = Number(coordsArray[1]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  cerrar() {
    this.viewController.dismiss(); 
  }

}
