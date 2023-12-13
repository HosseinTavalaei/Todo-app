import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../Database';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  existingUsers: IUser[] | undefined;
  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.authService.fetchUsers().then((users) => {
      if (Array.isArray(users)) {
        this.existingUsers = users;
      }
    });
  }

  onCansel() {
    this.modalCtrl.dismiss();
  }

  registerUser(form: NgForm) {

    const userIsRegistering: Omit<IUser, 'id'> = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
      todos: []
    };
    
    const isUserExisted = this.existingUsers?.some(user => user.email === userIsRegistering.email)
    
        if (isUserExisted) {
          this.alertCtrl
            .create({
              header: 'Oops !',
              message: 'User already existed !',
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                },
              ],
            })
            .then((alertEL) => {
              alertEL.present();
            });
        
        } else {
          this.authService.register(userIsRegistering);
          this.alertCtrl
            .create({
              header: 'Registration Successful',
              message: 'User registered ',
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  handler: () => {
                    this.modalCtrl.dismiss();
                  },
                },
              ],
            })
            .then((alertEl) => alertEl.present());
        }
  }
}
