import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'films/:id',      component: FilmsDetailComponent },
  { path: 'films', component: FilmsListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [FilmsListComponent, FilmsDetailComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    FilmsListComponent,
    FilmsDetailComponent
  ]
})
export class FilmsModule { }
