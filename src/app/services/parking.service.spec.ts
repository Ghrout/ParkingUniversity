import { TestBed } from '@angular/core/testing';
import { ParkingService } from './parking.service';

describe('ParkingService', () => {
  /**
   * @var {ParkingService} service - Instancia del servicio de estacionamiento que se va a probar.
   */
  let service: ParkingService;

  beforeEach(() => {
    // Configura el entorno de prueba para el módulo.
    TestBed.configureTestingModule({});

    // Inyecta el servicio de estacionamiento en la variable 'service'.
    service = TestBed.inject(ParkingService);
  });

  /**
   * @test {it} - Verifica que el servicio se crea correctamente.
   */
  it('should be created', () => {
    expect(service).toBeTruthy(); // Asegura que la instancia del servicio no sea nula.
  });
});
