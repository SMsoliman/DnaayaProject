import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users/user.module';
import { userProfileService } from '../../services/serviceList/user.profile.service';

/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {
  user : User = {
    name : '' ,
    email : '' , 
    phone : '' , 
    address : '' , 
    medicalEX : '' , 
    password : '' ,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams , private userProfileService : userProfileService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentPage');
  }

  saveData(user : User){
this.userProfileService.addItem(user).then(ref => {
  console.log(ref.key + "user added !!")
})
  }

}
