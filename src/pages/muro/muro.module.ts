import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuroPage } from './muro';

@NgModule({
  declarations: [
    MuroPage,
  ],
  imports: [
    IonicPageModule.forChild(MuroPage),
  ],
})
export class MuroPageModule {}
