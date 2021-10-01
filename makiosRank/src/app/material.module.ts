import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialMod = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [...materialMod],
  exports: [...materialMod]
})
export class MaterialModule {}