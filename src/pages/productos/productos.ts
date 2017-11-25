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
      descripcion: "Polera traida del extranjero",
      img: "assets/img/polera.png",
      stock: 15,
      precio: 13900,
      caracteristicas: "Elastica, disintos modelos",
      modelos: "X, Y, Z"
    },
    {
      nombreProducto: "Zapatos",
      descripcion: "Zapatos formales traidos directamente de italia",
      img: "assets/img/tacos.png",
      stock: 2,
      precio: 900,
      caracteristicas: "Filtro de aire, cuero",
      modelos: "Geox, XXX "
    },
    {
      nombreProducto: "Televisor",
      descripcion: "LCD pantalla plana",
      img: "assets/img/lcd.png",
      stock: 120,
      precio: 7900,
      caracteristicas: "pantalla ultra delgada, infrarojo, wifi",
      modelos: "LG, Panasonic"
    },
    {
      nombreProducto: "Chaqueta",
      descripcion: "",
      img: "",
      stock: 210,
      precio: 4000,
      caracteristicas: "",
      modelos: ""
    },
    {
      nombreProducto: "Guitarra",
      descripcion: "",
      img: "",
      stock: 89,
      precio: 9000,
      caracteristicas: "",
      modelos: ""
    },
    {
      nombreProducto: "Auto",
      descripcion: "",
      img: "",
      stock: 45,
      precio: 999999999,
      caracteristicas: "",
      modelos: ""
    },{
      nombreProducto: "Bajo",
      descripcion: "",
      img: "",
      stock: 45,
      precio: 9990,
      caracteristicas: "",
      modelos: ""
    },
    {
      nombreProducto: "Falda",
      descripcion: "",
      img: "",
      stock: 132,
      precio: 6990,
      caracteristicas: "",
      modelos: ""
    },
    {
      nombreProducto: "Calzas",
      descripcion: "",
      img: "",
      stock: 7,
      precio: 100,
      caracteristicas: "",
      modelos: ""
    },{
      nombreProducto: "Gorro",
      descripcion: "",
      img: "",
      stock: 1234,
      precio: 2340,
      caracteristicas: "",
      modelos: ""
    },
    {
      nombreProducto: "Lentes",
      descripcion: "",
      img: "",
      stock: 766,
      precio: 4560,
      caracteristicas: "",
      modelos: ""
    },
    {
      nombreProducto: "Computador",
      descripcion: "",
      img: "",
      stock: 976,
      precio: 270000,
      caracteristicas: "",
      modelos: ""
    }
   
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
