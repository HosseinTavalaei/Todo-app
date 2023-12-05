import { Component, Input } from '@angular/core';
import { ISubTodo, ITodo } from 'src/app/auth/Database';
import { TodosService } from '../../todos.service';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-step-menu',
  templateUrl: './step-menu.component.html',
  styleUrls: ['./step-menu.component.scss'],
})
export class StepMenuComponent {
  @Input() todo: ITodo | undefined
  @Input() step: ISubTodo | undefined;
  
  constructor(
    private todosService: TodosService,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController
    ) { }

  setToComplete(step: ISubTodo | undefined){

    this.popoverCtrl.dismiss()
    if (step !== undefined) {
      if (step.isCompleted !== true) {
        
        this.todosService.setSubTodoComplete(step)
      }else{
        this.todosService.undoSubTodoComplete(step)
      }
    }

  }

  deleteSubTodo(step: ISubTodo | undefined){
    this.popoverCtrl.dismiss()
    this.alertCtrl.create({
      header: 'Delete step',
      message: 'Are you sure to delete ?',
      buttons:[{
        text: 'No',
        role: 'Cancel'
      },{
        text:'Yes',
        role:'delete',
        handler:()=> {
          if(step !== undefined){
            this.todosService.removeSubTodo(step, this.todo)
            
          }
        }
      }]
    }).then(alertEl => alertEl.present())
  }

  promoteToTask(step:ISubTodo | undefined){
    this.popoverCtrl.dismiss()

    if (step !== undefined) {

      const stepText = step.text
      this.todosService.addNewTodo(stepText)
      this.todosService.removeSubTodo(step, this.todo)
    }
  }
}
