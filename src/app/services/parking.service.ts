import { Injectable } from '@angular/core';
import { ParkingSpace } from '../models/parking-space.model';

@Injectable({
  providedIn: 'root', // Permite que el servicio sea inyectable a nivel de la aplicación.
})
export class ParkingService {
  private spaces: ParkingSpace[] = [];

  constructor() {
    // Inicializa los espacios de estacionamiento para autos y motos.
    for (let i = 1; i <= 26; i++) {
      this.spaces.push({ id: i, type: 'auto', reservado: false }); // Crea espacios para autos.
    }
    for (let i = 27; i <= 66; i++) {
      this.spaces.push({ id: i, type: 'moto', reservado: false }); // Crea espacios para motos.
    }
  }

  getAvailableSpaces(): ParkingSpace[] {
    return this.spaces; // Retorna la lista de espacios.
  }

  /**
   * @method reserveSpace
   * @param {number} id - El ID del espacio a reservar.
   * @param {string} plate - La placa del vehículo.
   * @param {number | null} duration - La duración de la reserva.
   * @throws {Error} Si el espacio ya está reservado.
   */
  reserveSpace(id: number, plate: string, duration: number | null): void {
    const space = this.spaces.find((space) => space.id === id); // Busca el espacio por ID.
    if (space) {
      if (space.reservado) {
        throw new Error('Space is already reserved.'); // Lanza un error si ya está reservado.
      }
      space.reservado = true; // Marca el espacio como reservado.
      space.plate = plate; // Almacena la placa del vehículo.
      space.duration = duration; // Almacena la duración de la reserva.
    }
  }

  /**
   * @method releaseSpace
   * @param {number} id - El ID del espacio a liberar.
   * @throws {Error} Si el espacio ya está libre.
   */
  releaseSpace(id: number): void {
    const space = this.spaces.find((space) => space.id === id); // Busca el espacio por ID.
    if (space) {
      if (!space.reservado) {
        throw new Error('Space is already free.'); // Lanza un error si ya está libre.
      }
      space.reservado = false; // Marca el espacio como libre.
      space.plate = ''; // Limpia la placa.
      space.duration = null; // Limpia la duración.
    }
  }
}
