import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.scss']
})
export class UploadPDFComponent implements OnInit {
 public msgs = [];
 public uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit() {
  }


  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
