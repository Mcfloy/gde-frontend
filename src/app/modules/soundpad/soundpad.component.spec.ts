import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundpadComponent } from './soundpad.component';

describe('SoundpadComponent', () => {
  let component: SoundpadComponent;
  let fixture: ComponentFixture<SoundpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
