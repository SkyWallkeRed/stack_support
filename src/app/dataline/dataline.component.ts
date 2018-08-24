import {Component, OnInit, Input} from '@angular/core';
import {HelperService} from '../helper.service';

@Component({
  selector: 'app-dataline',
  templateUrl: './dataline.component.html',
  styleUrls: ['./dataline.component.scss']
})
export class DatalineComponent implements OnInit {
  @Input() article;

  constructor(private helper: HelperService) {
  }

  ngOnInit() {
    // console.log(this.article)
  }

  save(event) {
    // console.log(event);
    this.helper.urlToPdf(event.url, event.title);
  }

}
