import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  NgForm,
} from '@angular/forms';
import { AuthService } from './auth.service';
import { IUser } from './Database';
import { AlertController, ModalController } from '@ionic/angular';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  athenticatedUser: IUser | undefined;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.checkLocalStorage()
    
  }

  // when form submited 
  submitLogInForm(form: NgForm) {
    
    this.authService.fetchUsers().then( users => {

      const loginUser = users.find( user => user.email === form.value.email)

      if (loginUser?.password === form.value.password) {

        this.authService.setUserToLogIn(loginUser)
        this.router.navigateByUrl('/home/myday')
        
      }else {

        this.alertCtrl.create({
          header: 'Wrong password !',
          message: 'The password that you have entered is wrong ',
          buttons: [{text: 'Ok', role: 'cansel'}]
        }).then(alertEL => alertEL.present())
      }

    })

  }

  // when sign up button clicked
  signUpUser(){
    this.modalCtrl.create({component: RegisterComponent}).then(modalEl => {
      modalEl.present()
    })
  }
}
