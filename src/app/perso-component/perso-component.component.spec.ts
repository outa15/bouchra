import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoComponentComponent } from './perso-component.component';

describe('PersoComponentComponent', () => {
  let component: PersoComponentComponent;
  let fixture: ComponentFixture<PersoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
