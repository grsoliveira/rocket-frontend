import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCandidatoComponent } from './consulta-candidato.component';

describe('ConsultaCandidatoComponent', () => {
  let component: ConsultaCandidatoComponent;
  let fixture: ComponentFixture<ConsultaCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
