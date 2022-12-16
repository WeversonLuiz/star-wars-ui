import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: FilmsListComponent },
  { path: ':id/edit', component: FilmsDetailComponent }
];

@NgModule({
  declarations: [FilmsListComponent, FilmsDetailComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FilmsListComponent,
    FilmsDetailComponent
  ],
  providers: [
    {
      provide: MatDialog, useValue:{}
    }
  ]
})
export class FilmsModule { }
