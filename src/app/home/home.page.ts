import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IUser } from '../auth/Database';
import { Router } from '@angular/router';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  logedInUser: IUser | undefined ;
  isProfileSettinOpen : boolean = false;

  constructor(
    private platform : Platform,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private router: Router,
    private todoService: TodosService
  ) {}

  ngOnInit() {
    this.logedInUser = this.authService.wichUserIsLogedIn()
    this.todoService.getActiveUser(this.logedInUser)
  }

  onOpenProfile(){
      return this.isProfileSettinOpen = !this.isProfileSettinOpen
  }

  onLogOutUser(){
    this.authService.setUserToLogOut()
    this.router.navigateByUrl('/auth')
  
  }

}
