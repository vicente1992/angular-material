import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

//model
import { CountryRepost } from '../../models/countryRepost';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA: CountryRepost[];

  columns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered'];
  dataSource = new MatTableDataSource<CountryRepost>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReport();
  }

  public getAllReport() {
    this.covidService.covid19Report().subscribe(report => {
      console.log(report);
      this.dataSource.data = report as CountryRepost[]
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
