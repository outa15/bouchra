import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersonneComponent } from './ajouter-personne.component';

describe('AjouterPersonneComponent', () => {
  let component: AjouterPersonneComponent;
  let fixture: ComponentFixture<AjouterPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
