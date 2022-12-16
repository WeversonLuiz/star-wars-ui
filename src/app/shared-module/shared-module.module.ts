import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { FilmsModule } from '../films/films.module';
import { Routes } from '@angular/router';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [NavComponent, AsideComponent, SectionComponent, ArticleComponent, FooterComponent, DialogDetailsComponent],
  entryComponents: [
    DialogDetailsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    NavComponent,
    AsideComponent,
    SectionComponent,
    ArticleComponent,
    FooterComponent,
    DialogDetailsComponent
  ]
})
export class SharedModuleModule { }
