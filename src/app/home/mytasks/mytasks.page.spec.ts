import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytasksPage } from './mytasks.page';

describe('MytasksPage', () => {
  let component: MytasksPage;
  let fixture: ComponentFixture<MytasksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MytasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
