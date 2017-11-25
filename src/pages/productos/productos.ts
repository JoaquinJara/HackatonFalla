import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [{
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
   
  ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombreProducto.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  abrirDetalle(item){
    this.navCtrl.push(DetallePage, {item : item});
  }
}
