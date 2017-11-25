import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { ProductosPage } from '../pages/productos/productos';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { MuroPage } from '../pages/muro/muro';
import { DetallePage } from '../pages/detalle/detalle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BusquedaPage,
    ProductosPage,
    OfertasPage,
    MuroPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BusquedaPage,
    ProductosPage,
    OfertasPage,
    MuroPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
