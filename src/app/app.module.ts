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

const routes: Routes = [
  { 
    path: 'films',
    loadChildren: './films/films.module#FilmsModule',
  },
  {
    path: 'peoples',
    loadChildren: './people/people.module#PeopleModule'
  }
];

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
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
