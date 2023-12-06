import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayTodosPage } from './display-todos.page';

describe('DisplayTodosPage', () => {
  let component: DisplayTodosPage;
  let fixture: ComponentFixture<DisplayTodosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisplayTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
