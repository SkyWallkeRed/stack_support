import { Component, OnInit } from '@angular/core';
import {HelperService} from '../helper.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  public articles;
  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.allUpdate.subscribe((data) => {
      // @ts-ignore
      this.articles = data.articles;
    });

    setTimeout(() => { console.log(this.articles); }, 2000);
  }






}
