import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController,Platform } from '@ionic/angular';
import { IUser } from '../auth/Database';
import { Router} from '@angular/router';
import { TodosService } from './todos.service';
import { ITodo } from '../auth/Database';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  logedInUser: IUser | undefined ;
  isProfileSettinOpen : boolean = false;
  existTodos: ITodo[] | undefined;
  pageTitle: string = ''
  userLocation: string = 'completedPage'

  constructor(
    private authService: AuthService,
    private router: Router,
    private todoService: TodosService,
    private platformCtrl: Platform,

  ) {}

  ngOnInit() {
    this.logedInUser = this.authService.wichUserIsLogedIn()
    this.todoService.getActiveUser(this.logedInUser)
    this.checkScreenSize()
  }

  checkScreenSize(): boolean{
    let response: boolean
    if (this.platformCtrl.width() < 768){
      response =true;
    }else{
      response = false;
    }

    return response;
  }

  onLogOutUser(){
    this.authService.setUserToLogOut()
    this.router.navigateByUrl('/auth')
  }

}
