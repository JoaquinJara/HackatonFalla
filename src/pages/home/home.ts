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
    descripcion: "Tallas s-m-xl",
    img: "assets/img/polera.png",
    stock: 10,
    precio: 3900,
    caracteristicas: "",
    modelos: ""
  },
  {
    nombreProducto: "Zapatos",
    descripcion: "Tallas 10-12-14",
    img: "assets/img/tacos.png",
    stock: 10,
    precio: 3900,
    caracteristicas: "",
    modelos: ""
  },
  {
    nombreProducto: "Televisor",
    descripcion: "LCD pantalla plana",
    img: "assets/img/lcd.png",
    stock: 10,
    precio: 3900,
    caracteristicas: "",
    modelos: ""
  },
 
]
  constructor(public navCtrl: NavController) {

  }

  abrirDetalle(item){
    this.navCtrl.push(DetallePage, {item : item});
  }

}
