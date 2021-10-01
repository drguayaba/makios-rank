import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesListRoutingModule } from './challenges-list-routing.module';
import { ChallengesListComponent } from './challenges-list.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ChallengesListComponent],
  imports: [
    CommonModule,
    ChallengesListRoutingModule,
    SharedModule
  ]
})
export class ChallengesListModule { }
