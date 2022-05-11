import {TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CaracteristicasListaComponent } from './caracteristicas-lista.component';

describe('ProveedorDetalleComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should create', () => {
    expect(CaracteristicasListaComponent).toBeTruthy();
  });

});
