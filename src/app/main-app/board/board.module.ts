import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BoardPage } from './board.page';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

const routes: Routes = [
  {
    path: '',
    component: BoardPage,
  },
    {
        path: 'record',
        loadChildren: '../record-add/record-add.module#RecordAddPageModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        RoundProgressModule
    ],
  declarations: [BoardPage]
})
export class BoardPageModule {}
