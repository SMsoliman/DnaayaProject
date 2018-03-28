import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'

/*
*
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,  private afAuth : AngularFireAuth , private toast : ToastController) {
  }

  ionViewDidLoad() {
    
  this.afAuth.authState.subscribe(data => {
    if(data.email && data.uid){
      this.toast.create({
        message : `Welcome to Dnaaya , ${data.email} ` ,
        duration : 3000
      }).present();
    }
    else {
      this.toast.create({
        message : `could not find the authentication Details ` ,
        duration : 3000
      }).present();
      this.navCtrl.push("LoginPage");
    }
  });
  }
}
