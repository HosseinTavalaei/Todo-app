import { AlertController } from '@ionic/angular';
import { ITodo } from 'src/app/auth/Database';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  existTodos: ITodo[] | undefined;
  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.existTodos = this.todosService.getCompletedTodos();
  }

  removeTask(id: number, event: any) {
    let item = event.target.parentElement.parentElement;
    this.alertCtrl
      .create({
        header: 'Delete Task ?',
        message: 'Are you sure to delet task',
        buttons: [
          {
            text: 'cancel',
            role: 'cancel',
          },
          {
            text: 'Yes',
            handler: () => {
              this.todosService.removeTodo(id);
              item.remove();
            },
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  undoCompletedTask(todo: ITodo, event: any) {
    let item = event.target.parentElement.parentElement;

    this.todosService.undoCompletedTodo(todo);

    setTimeout(() => {
      item.remove();
    }, 300);
  }
}
