import { ITodo } from 'src/app/auth/Database';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  existTodos: ITodo[] | undefined;
  userLocation: string = 'completedPage'
  
  constructor(
    private todosService: TodosService,
    private platformCtrl: Platform

  ) {}

  ngOnInit() {
    this.existTodos = this.todosService.getCompletedTodos();
    this.checkScreenSize()
  }

  checkScreenSize(): boolean{
    let response: boolean; 
    if(this.platformCtrl.width() < 768 ){
      response = true;
    }else {
      response = false;
    }
    return response; 
  }
}
