import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  url: string = 'https://corona.lmao.ninja/v2/countries/';
  constructor(private httpClient: HttpClient) {


  }

  covid19Report() {
    return this.httpClient.get(this.url);
  }
}
