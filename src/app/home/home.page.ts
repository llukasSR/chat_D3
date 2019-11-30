import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //usuarios;
  constructor(public navCtrl: NavController) {

  }

usuarios = [
{
  nome: ''
}
]

  onItemClick (usuario){
    //console.log("item-click", usuarios)
    this.navCtrl.push('detailPage')
  }

}
