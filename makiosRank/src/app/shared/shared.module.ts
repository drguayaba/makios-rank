import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const sharedModules = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    sharedModules
  ],
  exports: [...sharedModules, HeaderComponent],
})
export class SharedModule { }
