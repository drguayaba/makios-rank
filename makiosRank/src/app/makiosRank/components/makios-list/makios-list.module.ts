import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakiosListRoutingModule } from './makios-list-routing.module';
import { MakiosListComponent } from './makios-list.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [MakiosListComponent],
  imports: [
    CommonModule,
    MakiosListRoutingModule,
    SharedModule
  ]
})
export class MakiosListModule { }
