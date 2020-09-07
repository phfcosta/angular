import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicListComponent } from './electronic-list/electronic-list.component';
import { ElectronicDetailComponent } from './electronic-list/electronic-detail/electronic-detail.component';


@NgModule({
  declarations: [ElectronicListComponent, ElectronicDetailComponent],
  imports: [
    CommonModule,
    ElectronicsRoutingModule,
    MatIconModule,
    MatListModule,
  ]
})
export class ElectronicsModule { }
