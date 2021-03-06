import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import {DexieService} from './dexie.service';

import {Record} from '../models/model';

@Injectable({
  providedIn: 'root'
})



export class TableQueryService {

  table: Dexie.Table<Record, number>;

  constructor(private dexieService: DexieService) { 
    this.table = this.dexieService.table('data');
  }

  getAll() {
    return this.table.toArray();
  }

  getHundred(step: number) {
    return this.table.offset(step*100).limit(100).toArray();
  }

  add(record: Record) {
    return this.table.add(record);
  }

  update(id: number, record: any) {
    return this.table.put(record, id);
  }

  remove(id: number) {
    return this.table.delete(id);
  }

  bulkAdd(data: any[]) {
    return this.table.bulkAdd(data);
  }

  getRow(id:number){
    return this.table.get(id);
  }
}
