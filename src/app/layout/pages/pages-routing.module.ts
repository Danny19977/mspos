<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'blank-page', component: BlankPageComponent },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: 'under-maintenance',
        component: UnderMaintenanceComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'blank-page', component: BlankPageComponent },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: 'under-maintenance',
        component: UnderMaintenanceComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
