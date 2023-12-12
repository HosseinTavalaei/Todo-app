import { StepMenuComponent } from './home/todo-options/step-menu/step-menu.component';
import { TodoComponent } from './home/todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TodoOptionsComponent } from './home/todo-options/todo-options.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './home/date-picker/date-picker.component';
@NgModule({
  declarations: [
    TodoComponent, 
    TodoOptionsComponent,
    StepMenuComponent,
    DatePickerComponent
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
    DatePickerComponent
    
  ],
})
export class SharedModule { }
