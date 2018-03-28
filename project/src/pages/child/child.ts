import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { storage , initializeApp ,} from 'firebase'
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
//import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
/**
 * Generated class for the ChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams ,
    private camera : Camera ,
    private toast : ToastController ,
    private fire : AngularFireAuth
   // private imagePicker: ImagePicker
  ) 
  {
      //initializeApp(FIREBASE_CONFIG)
  }
  async takePhoto(){
    const currentUserId = this.fire.auth.currentUser.uid;

    console.log(currentUserId);
    //const pictures = storage().ref('pictures');
    //console.log(pictures);
    
    try{
      const options : CameraOptions = {
        quality : 50 , 
        targetHeight : 600 , 
        targetWidth : 600 , 
        destinationType : this.camera.DestinationType.DATA_URL , 
        encodingType : this.camera.EncodingType.JPEG , 
        mediaType : this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg ;base64, ${result}`;
      const pictures = storage().ref('pictures' + currentUserId);
       
      //TODO Loop for images
      //Fixme 
      
      pictures.putString(image , 'data_url');
      console.log("End Function")

    }
    catch (e){
      this.toast.create({
        message : `could not find the authentication Details ` ,
        duration : 3000
      }).present();
      console.error(e) ; 
    }
     
  }

  /* takeImage(){
    const options : ImagePickerOptions = {} ;
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildPage');
  }

  hideME  ;
  allergyToggle  ;

  hide() {
    
    if(this.allergyToggle = true){
      this.hideME = false ; 
    }
    else {
      this.hideME = false ; 
    }
  }

}
