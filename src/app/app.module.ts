import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';

//Primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

//Components
import { AppComponent } from './app.component';
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { TablePrimengComponent } from './components/table-primeng/table-primeng.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { Covid19Component } from './components/covid19/covid19.component';



//Services
import { CarsService } from './services/cars.service';
import { PostsService } from './services/posts.service';
import { CovidService } from './services/covid.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    TableMaterialComponent,
    TablePrimengComponent,
    NavigationComponent,
    HomeComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableExporterModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule
  ],
  providers: [CarsService, PostsService, CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
