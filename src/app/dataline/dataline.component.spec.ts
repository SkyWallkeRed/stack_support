import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalineComponent } from './dataline.component';

describe('DatalineComponent', () => {
  let component: DatalineComponent;
  let fixture: ComponentFixture<DatalineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
