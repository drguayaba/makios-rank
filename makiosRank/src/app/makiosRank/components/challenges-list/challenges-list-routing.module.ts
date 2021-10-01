import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesListComponent } from './challenges-list.component';

const routes: Routes = [
  { path: '', component: ChallengesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengesListRoutingModule { }
