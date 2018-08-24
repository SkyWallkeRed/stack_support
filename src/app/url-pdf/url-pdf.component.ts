import {Component, OnInit} from '@angular/core';
import {HelperService} from '../helper.service';

@Component({
  selector: 'app-url-pdf',
  templateUrl: './url-pdf.component.html',
  styleUrls: ['./url-pdf.component.scss']
})
export class UrlPdfComponent implements OnInit {

  constructor(private helper: HelperService) {
  }

  public url: string;
  public name: string = '';

  ngOnInit() {
  }

  keyDownMdn(event) {
    // console.log(this.url, this.name);
    if (event.keyCode === 13) {
      // console.log(this.name);
      this.helper.urlToPdf(this.url, this.name);
      // this.url = '';
      // this.name = '';
    }
  }

}
