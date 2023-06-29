import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Pair } from './pairs.service';

export class Round extends BaseService {
  constructor(item: {id: string}) {
    super();
    this.id = item.id;
  }

  addPair(pair: Pair) {
    this.add(pair);
  }
}

@Injectable({
  providedIn: 'root'
})
export class RoundsService extends BaseService {

  constructor() {
    super();
  }

  createNewRound() {
    this.add(new Round({id: `${this.ids.length +  1}` }));
  }

  getCurrentRound() {
    return this.items[this.ids[this.ids.length -1]];
  }
}
