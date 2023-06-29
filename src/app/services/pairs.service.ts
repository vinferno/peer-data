import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Dev } from './devs.service';


export class Pair extends BaseService {
  constructor(dev1: Dev, dev2: Dev) {
    let secondDev = dev2;
     if (!dev2) {
       secondDev = new Dev('wild');
     }
    super();
    this.id = [dev1, secondDev].sort( (a, b) => a.id < b.id ? -1 : 1).map((dev) => dev.id).join('-');
  }
}



@Injectable({
  providedIn: 'root'
})
export class PairsService extends BaseService {
  id = 'Pair Service'
  constructor() {
    super();
  }

  addPair(dev1: Dev, dev2: Dev) {
    const pair = new Pair(dev1, dev2);
    this.add(pair);
    return pair;
  };

}
