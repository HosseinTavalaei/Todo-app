import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../auth/Database';
import { Router } from '@angular/router';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  logedInUser: IUser | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private todoService: TodosService
  ) {}

  ngOnInit() {
    this.logedInUser = this.authService.wichUserIsLogedIn();
    this.todoService.getActiveUser(this.logedInUser);
  }

  ionViewWillEnter() {
    this.logedInUser = this.authService.wichUserIsLogedIn();
  }

  onLogOutUser() {
    this.authService.setUserToLogOut();
    this.router.navigateByUrl('/auth');
  }
}
