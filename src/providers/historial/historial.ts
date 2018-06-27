import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from '../../models/ScanData';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { MapaPage } from '../../pages/mapa/mapa';
import { EmailComposer } from '@ionic-native/email-composer';

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {

  private historial: ScanData[] = []; 

  constructor(
    public http: HttpClient,
    private iab: InAppBrowser,
    private modalController: ModalController,
    private emailComposer: EmailComposer
  ) {
  }

  agregarHistorial(tipo: string, info: string) { 
    let data = new ScanData(tipo, info);
    this.historial.unshift(data); // unshift añade al principio
    console.log(this.historial);
  }

  cargarHistorial() { 
    return this.historial;
  }

  abrirEscaneo(index: number) {
    let scanData = this.historial[index];

    switch(scanData.tipo) {
      case "http":
        this.iab.create(scanData.info);
        break;
      case "mapa": 
        this.modalController.create(MapaPage, {coords: scanData.info}).present();
        break;
      case "email": 
        this.enviarEmail(scanData.info);
        break;
      default:
        console.error("Tipo no soportado")
    }
  }

  private enviarEmail(texto: string) { 

    let emailArray = texto.split(/[;]/); 

    let to = emailArray[0].replace("MATMSG:TO:", ""); 
    let subject = emailArray[1].replace("SUB:", "");
    let body = emailArray[2].replace("BODY:", "");

    let email = { 
      "to": to,
      "subject": subject,
      "body": body
    };

    this.emailComposer.open(email); 
  }

}
