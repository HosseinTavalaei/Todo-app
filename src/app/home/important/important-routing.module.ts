import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportantPage } from './important.page';

const routes: Routes = [
  {
    path: '',
    component: ImportantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportantPageRoutingModule {}
