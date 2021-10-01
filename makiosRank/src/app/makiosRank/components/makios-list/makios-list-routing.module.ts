import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakiosListComponent } from './makios-list.component';

const routes: Routes = [
  { path: '', component: MakiosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakiosListRoutingModule { }
