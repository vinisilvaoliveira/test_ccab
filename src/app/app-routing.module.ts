import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './core/table/personal-information/personal-information.component';
import { TableComponent } from './core/table/table.component';


const routes: Routes = [
  {
    path: '', component: TableComponent
  },
  {
    path: 'dados-usuario', component: PersonalInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
