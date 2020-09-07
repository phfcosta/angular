import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { ElectronicsModule } from './electronics/electronics.module';
import {MatDividerModule} from '@angular/material/divider';

/*
const appRoutes :Routes = [
  { path: 'dvds', component: DvdComponent},
  { path: 'books', component: BookComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dvds'},
  { path: '**', component: PageNotFoundComponent},
]
*/
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    //RouterModule.forRoot(appRoutes),
    //ElectronicsModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
