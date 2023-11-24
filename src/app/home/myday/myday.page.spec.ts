import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MydayPage } from './myday.page';

describe('MydayPage', () => {
  let component: MydayPage;
  let fixture: ComponentFixture<MydayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MydayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
