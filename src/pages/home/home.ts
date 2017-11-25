import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Productos: Array<any> = [{
    nombreProducto: "Polera",
    descripcion: "Polera Italiana",
    img: "assets/img/polera.png",
    stock: 10,
    precio: 3900,
    caracteristicas: "Elastica, disintos modelos",
    modelos: "X, Y, Z"
  },
  {
    nombreProducto: "Zapatos",
    descripcion: "Zapatos de italia",
    img: "assets/img/tacos.png",
    stock: 10,
    precio: 3900,
    caracteristicas: "Filtro de aire, cuero",
    modelos: "Geox, XXX "
  },
  {
    nombreProducto: "Televisor",
    descripcion: "LCD pantalla plana",
    img: "assets/img/lcd.png",
    stock: 10,
    precio: 3900,
    caracteristicas: "pantalla ultra delgada, infrarojo, wifi",
    modelos: "LG, Panasonic"
  }
 
]
  constructor(public navCtrl: NavController) {

  }

  abrirDetalle(item){
    this.navCtrl.push(DetallePage, {item : item});
  }

}
