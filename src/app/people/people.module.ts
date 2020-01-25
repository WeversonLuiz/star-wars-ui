import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  //{ path: 'films/:id',      component: FilmsDetailComponent },
  { path: 'peoples', component: PeopleListComponent }
];
 
@NgModule({
  declarations: [PeopleListComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    PeopleListComponent
  ]
})
export class PeopleModule { }
