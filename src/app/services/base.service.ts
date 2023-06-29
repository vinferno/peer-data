import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  id = '';

  ids: string[]= [];
  items: { [id: string]: any } = {};

  constructor() { }

  add(item: {id: string}) {
    this.ids.push(item.id);
    this.items[item.id] = item;
  }

  get list() {
    return this.ids.map( id => this.items[id] );
  }
}
