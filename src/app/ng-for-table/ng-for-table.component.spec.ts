import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTableComponent } from './ng-for-table.component';

describe('NgForTableComponent', () => {
  let component: NgForTableComponent;
  let fixture: ComponentFixture<NgForTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
