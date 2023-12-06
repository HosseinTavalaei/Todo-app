import { StepMenuComponent } from './home/todo-options/step-menu/step-menu.component';
import { TodoComponent } from './home/todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TodoOptionsComponent } from './home/todo-options/todo-options.component';
import { FormsModule } from '@angular/forms';
import { RemindMenuComponent } from './home/todo-options/remind-menu/remind-menu.component';
import { AddDueDateMenuComponent } from './home/todo-options/add-due-date-menu/add-due-date-menu.component';
import { RepeatMenuComponent } from './home/todo-options/repeat-menu/repeat-menu.component';
@NgModule({
  declarations: [
    TodoComponent, 
    TodoOptionsComponent,
    StepMenuComponent,
    RemindMenuComponent,
    AddDueDateMenuComponent,
    RepeatMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  exports: [
    TodoComponent,
    TodoOptionsComponent,
    StepMenuComponent,
    RemindMenuComponent,
    AddDueDateMenuComponent,
    RepeatMenuComponent
    
  ],
})
export class SharedModule { }
