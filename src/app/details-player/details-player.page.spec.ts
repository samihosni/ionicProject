import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPlayerPage } from './details-player.page';

describe('DetailsPlayerPage', () => {
  let component: DetailsPlayerPage;
  let fixture: ComponentFixture<DetailsPlayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
