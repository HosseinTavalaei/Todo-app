import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayTodosPageRoutingModule } from './display-todos-routing.module';

import { DisplayTodosPage } from './display-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayTodosPageRoutingModule
  ],
  // declarations: [DisplayTodosPage]
})
export class DisplayTodosPageModule {}
