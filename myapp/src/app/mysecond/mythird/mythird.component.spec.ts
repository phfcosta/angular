import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MythirdComponent } from './mythird.component';

describe('MythirdComponent', () => {
  let component: MythirdComponent;
  let fixture: ComponentFixture<MythirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MythirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MythirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
