import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanData } from '../../models/ScanData';
import { HistorialProvider } from '../../providers/historial/historial';

/**
 * Generated class for the EscaneosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escaneos',
  templateUrl: 'escaneos.html',
})
export class EscaneosPage {

  escaneos: ScanData[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public historial: HistorialProvider) {
    this.escaneos = this.historial.cargarHistorial();
  }

  abrirEscaneo(index: number){
    this.historial.abrirEscaneo(index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscaneosPage');
  }

}
