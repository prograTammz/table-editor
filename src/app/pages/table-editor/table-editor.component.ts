import { Component, HostListener, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { TableQueryService } from 'src/app/services/table-query.service';
import { Record} from '../../models/model';
@Component({
  selector: 'app-table-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.scss']
})
export class TableEditorComponent implements OnInit {

  loading:boolean;
  page: number;
  displayedColumns: string[] = [];
  records: Record[] = [];
  dataSource = new MatTableDataSource<Record>(this.records);

  constructor(private tableQuery: TableQueryService) { 
    this.generateColumns();
    this.loading = false;
    this.page = 0;
  }

  ngOnInit(): void {
    this.getData();
  }

  generateColumns() {
    for (let index = 1; index <= 100; index++) {
      this.displayedColumns.push(`Column ${index}`);
    }
    this.displayedColumns.push('edit');
  }

  getData() {
    this.loading = true;
    this.tableQuery.getHundred(this.page).then( data => {
    this.records = [ ...this.records, ...data];
    this.dataSource = new MatTableDataSource(this.records);
     this.loading = false;
    })
  }

  edit(row) {
    this.loading = true;
    this.tableQuery.update(row.id, row).then(_ => {
      this.loading = false;
    })
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
      // visible height + pixel scrolled >= total height 
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
        console.log("End");
      }
  }
}
