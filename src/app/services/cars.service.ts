import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httClient: HttpClient) { }

  getCard() {
    return this.httClient.get<any>('assets/cars-medium.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
  }
}
