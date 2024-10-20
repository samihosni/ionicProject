import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlayerPage } from './update-player.page';

describe('UpdatePlayerPage', () => {
  let component: UpdatePlayerPage;
  let fixture: ComponentFixture<UpdatePlayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
