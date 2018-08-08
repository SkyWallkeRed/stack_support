import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dataline',
  templateUrl: './dataline.component.html',
  styleUrls: ['./dataline.component.scss']
})
export class DatalineComponent implements OnInit {
  @Input() article;
  constructor() { }

  ngOnInit() {
    // console.log(this.article)
  }

}
