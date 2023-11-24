import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportantPage } from './important.page';

describe('ImportantPage', () => {
  let component: ImportantPage;
  let fixture: ComponentFixture<ImportantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImportantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
