import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

const devs = [
  'Saba',
  'Aman',
  'Angel',
  'Bryce',
  'Chazz',
  'Gichelle',
  'John',
  'Lielt',
  'Mekdes',
  'Vinson',
  'Sirisha',
];


export class Dev extends BaseService {
  constructor(name: string) {
    super();
    this.id = name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DevsService extends BaseService {
  id = 'devs';
  constructor() {
    super();
  }

  createAllDevs() {
    devs.forEach(dev => {
      this.add(new Dev(dev));
    })
  }


}
