import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyFirstComponent} from './myfirst.component';
import { MysecondComponent } from './mysecond/mysecond.component';
import { MythirdComponent } from './mysecond/mythird/mythird.component'


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MysecondComponent,
    MythirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
