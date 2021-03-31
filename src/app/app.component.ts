import { Component } from '@angular/core';
import { DexieService } from './services/dexie.service';
import {TableQueryService} from './services/table-query.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  worker = new Worker('./workers/generation.worker', { type: 'module' });

  constructor(public tableQuery: TableQueryService, public dexie: DexieService) {
    this.dexie.doesExist().then(exists => {
      if(!exists) {
        const worker = new Worker('./workers/generation.worker', { type: 'module' });
        worker.onmessage = ({ data }) => {
          this.tableQuery.bulkAdd(data);
          worker.terminate();
        };
        worker.postMessage({rows: 6000, cols: 100});
      }
    })
      
    
  }
  
}
