import {Component} from '@angular/core';
import 'rxjs/Rx'
import { BackandService } from '@backand/angular2-sdk'
//npm install --save @ionic-native/google-plus
//import { GooglePlus } from '@ionic-native/google-plus';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
//import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  templateUrl: 'signup.html',
  selector: 'page-signup',
})
export class SignupPage {

  email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';
  userData: any = {};

  constructor(private backand: BackandService) {
    console.log('signup');

    // if you want Ionic web app to be usuable if shared as link in Facebook

    ///////////

  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    this.backand.signup(this.firstName, this.lastName, this.email, this.signUpPassword, this.confirmPassword)
      .then((res: any) => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      (err: any) => {
        alert(err.data)
      }
    );
  }


}
