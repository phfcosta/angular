import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PeopleComponent } from './people/people.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class MainModule { }
