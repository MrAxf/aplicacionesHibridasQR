import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController,
    private platform: Platform,
    private historialProvider: HistorialProvider) {
  }

  scan() {
    if (!this.platform.is('cordova')) {
      this.historialProvider.agregarHistorial("http", "http://google.com");
      this.historialProvider.agregarHistorial("email", "MATMSG:TO:johndoe@gmail.com;SUB:Hello;BODY:Hello world;;");
      this.historialProvider.agregarHistorial("mapa", "geo:36.8364634,-2.4209003,15");
      return;
    }
    this.barcodeScanner.scan()
      .then(barcodeData => {
        console.log('result', barcodeData.text);
        console.log('format: ', barcodeData.format);
        console.log('cancelled: ', barcodeData.cancelled);
        if (barcodeData.cancelled == false && barcodeData.text != null) {
          this.historialProvider.agregarHistorial(barcodeData.format, barcodeData.text);
        }
      }).catch(err => {
        console.log('Error', err);
        this.mostrarError(`Error: ${err}`);
      });
  }

  mostrarError(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
