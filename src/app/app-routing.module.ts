import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { TablePrimengComponent } from './components/table-primeng/table-primeng.component';
import { Covid19Component } from './components/covid19/covid19.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'material', component: TableMaterialComponent },
  { path: 'primeng', component: TablePrimengComponent },
  { path: 'covid', component: Covid19Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
