import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscaneosPage } from './escaneos';

@NgModule({
  declarations: [
    EscaneosPage,
  ],
  imports: [
    IonicPageModule.forChild(EscaneosPage),
  ],
})
export class EscaneosPageModule {}
