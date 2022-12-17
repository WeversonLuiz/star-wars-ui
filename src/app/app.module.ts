import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { NgxBootstrapModule } from './modules/ngxbootstrap/ngxbootstrap.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material';

// const routes: Routes = [
//   {
//     path: 'films',
//     loadChildren: './films/films.module#FilmsModule',
//   },
//   {
//     path: 'peoples',
//     loadChildren: './people/people.module#PeopleModule'
//   }
// ];

const routes: Routes = [
  {
    path: 'films',
    loadChildren: async () => (await import('./films/films.module')).FilmsModule,
  },
  {
    path: 'species',
    loadChildren: async () => (await import('./species/species.module')).SpeciesModule
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapModule,
    NgbModule,
    FilmsModule,
    PeopleModule,
    SharedModuleModule,
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true }),
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
