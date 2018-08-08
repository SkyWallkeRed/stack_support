import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPDFComponent } from './upload-pdf.component';

describe('UploadPDFComponent', () => {
  let component: UploadPDFComponent;
  let fixture: ComponentFixture<UploadPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
