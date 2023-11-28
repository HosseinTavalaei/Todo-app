import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ITodo } from 'src/app/auth/Database';

@Component({
  selector: 'app-important',
  templateUrl: './important.page.html',
  styleUrls: ['./important.page.scss'],
})
export class ImportantPage implements OnInit {
  existTodos: ITodo[] | undefined;
  userLocation: string = 'importantPage'
  
  constructor(
    private todosService: TodosService,
    private platformCtrl: Platform
  ) { }

  ngOnInit() {
   this.existTodos = this.todosService.getImportantTodos()
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
