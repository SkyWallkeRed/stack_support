import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPdfComponent } from './url-pdf.component';

describe('UrlPdfComponent', () => {
  let component: UrlPdfComponent;
  let fixture: ComponentFixture<UrlPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
