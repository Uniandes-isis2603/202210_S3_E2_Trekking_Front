import {TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExpedicionCardComponent } from './expedicion-card.component';

describe('ProveedorDetalleComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should create', () => {
    expect(ExpedicionCardComponent).toBeTruthy();
  });

});
