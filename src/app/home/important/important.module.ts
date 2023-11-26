import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportantPageRoutingModule } from './important-routing.module';

import { ImportantPage } from './important.page';
import { TodoComponent } from '../todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportantPageRoutingModule
  ],
  // declarations: [ImportantPage]
})
export class ImportantPageModule {}
