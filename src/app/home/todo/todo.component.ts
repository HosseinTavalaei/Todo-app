import { ActivatedRoute } from '@angular/router';
import { TodosService } from './../todos.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ITodo } from 'src/app/auth/Database';
import { __param } from 'tslib';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() receivedTodo: ITodo | undefined;
  @Input() isDetailMode: boolean | undefined;
  @Input() todoText: string | undefined = '';
  @Input() flexible: boolean = false;
  @Output() public isOpen = new EventEmitter<boolean>();
  @Output() public clickedTodo = new EventEmitter<ITodo>();

  isOptionsOn: boolean = false;
  userLoc: string = 'myday';
  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (param.has('id')) {
        this.userLoc = param.get('id') ?? 'myday';
      }
    });
  }

  setTodoStatusToComplete(todo: ITodo | undefined, event: any) {
    event.stopPropagation();
    if (todo !== undefined) {
      if (todo.isCompleted === false) {
        this.todosService.setTodoToComplete(todo);
        // const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
        // soundEffect.play()
      } else {
        this.todosService.undoCompletedTodo(todo);
      }

      if (this.userLoc === 'completed') {
        let item = event.target.parentElement.parentElement;
        setTimeout(() => {
          item.remove();
        }, 300);
      }
    }
  }

  setTodoStatusToImportant(todo: ITodo | undefined, event: any) {
    event.stopPropagation();
    if (todo !== undefined) {
      if (todo.isImportant === false) {
        this.todosService.setTodoToImportant(todo);
      } else {
        this.todosService.undoImportantTodo(todo);
      }
      if (this.userLoc === 'important') {
        let item = event.target.parentElement.parentElement;
        setTimeout(() => {
          item.remove();
        }, 300);
      }
    }
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

  openTodoOption(event: any) {
    this.isOptionsOn = !this.isOptionsOn;
    this.isOpen.emit(this.isOptionsOn);
    this.clickedTodo.emit(this.receivedTodo);
  }

  changeTaskTitle(
    newText: string | undefined | number,
    event: any,
    todo: ITodo | undefined
  ) {
    if (newText !== undefined && event.key === 'Enter' && todo !== undefined) {
      let converted: string = newText.toString();
      this.todosService.changeTodoText(todo, converted);
    }
  }
}
