import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MydayPage } from './myday/myday.page';
import { CompletedPage } from './completed/completed.page';
import { ImportantPage } from './important/important.page';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage,
  MydayPage,
  CompletedPage,
  ImportantPage
]

})
export class HomePageModule {}
