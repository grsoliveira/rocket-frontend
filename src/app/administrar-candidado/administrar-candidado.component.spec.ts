import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCandidadoComponent } from './administrar-candidado.component';

describe('AdministrarCandidadoComponent', () => {
  let component: AdministrarCandidadoComponent;
  let fixture: ComponentFixture<AdministrarCandidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarCandidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCandidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
