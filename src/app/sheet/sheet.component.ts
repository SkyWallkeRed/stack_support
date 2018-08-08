import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../../node_modules/primeng/api';
// import {jj} from ''


interface PDF {
  name: string;
  code: string;
}


@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})


export class SheetComponent implements OnInit {

  public display = false;
  public pdfSrc;
  PDF1: SelectItem[];
  selectedPDF1: PDF;

  constructor() {
    this.PDF1 = [
      { label: 'Select sheet', value: null },
      { label: 'mongoose', value: { id: 1, code: '../../assets/MongoDB-CheatSheet-v1_0.pdf' } },
      { label: 'TS', value: { id: 2, code: '../../assets/tscheatsheet.pdf' } },
      { label: '3', value: { id: 3, code: '3' } },
      { label: '4', value: { id: 4, code: '4' } },
      { label: '5', value: { id: 5, code: '5' } }
    ];
  }

  ngOnInit() {
  }
  showDialog() {
    this.pdfSrc = this.selectedPDF1.code;
    this.display = true;
  }
  mongoDB() {
    this.pdfSrc = '../../assets/MongoDB-CheatSheet-v1_0.pdf';
    this.display = true;

  }
}
