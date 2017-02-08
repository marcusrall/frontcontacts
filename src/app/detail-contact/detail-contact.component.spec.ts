/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailContactComponent } from './detail-contact.component';

describe('DetailContactComponent', () => {
  let component: DetailContactComponent;
  let fixture: ComponentFixture<DetailContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
