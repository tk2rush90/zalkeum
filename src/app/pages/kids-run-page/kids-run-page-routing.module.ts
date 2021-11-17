import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsRunPageComponent } from './kids-run-page.component';
import {KidsRunOthersPageComponent} from './kids-run-others-page/kids-run-others-page.component';

const routes: Routes = [
  {
    path: '',
    component: KidsRunPageComponent,
    children: [
      {
        path: 'others',
        component: KidsRunOthersPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRunPageRoutingModule { }
