import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
 
// import auth provider
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    credentials: any = {
        username: "",
        password: ""
    }

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public auth: AuthProvider, public toastCtrl: ToastController) {}

    ionViewDidLoad() {
        //check apakah sudah dalam kondisi login?
        let status = localStorage.getItem("isLogin");
        if (status == "true") {
            this.navCtrl.setRoot(HomePage);
        }
    }

    login() {
        this.auth.login(this.credentials).then((resp) => {
            let toast = this.toastCtrl.create({
                message: resp,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.navCtrl.setRoot(HomePage);
        }).catch((err) => {
            let toast = this.toastCtrl.create({
                message: err,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        })
    }
}