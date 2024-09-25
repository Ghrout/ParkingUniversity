// @var: Se utiliza para documentar las variables, indicando el tipo y propósito de cada una.
// @param: Describe los parámetros que toma cada función, incluyendo su tipo y significado.
// @returns: Indica el valor de retorno de la función, en caso de que devuelva algo.
// @throws: Se utiliza para documentar las excepciones que puede lanzar una función en caso de errores.
import { ParkingSpace } from './parking-space.model';

/**
 * Clase que representa un lote de estacionamiento.
 */
export class ParkingLot {
  /** @var {ParkingSpace[]} Arreglo para espacios de carros */
  private carSpaces: ParkingSpace[] = [];

  /** @var {ParkingSpace[]} Arreglo para espacios de motos */
  private motorcycleSpaces: ParkingSpace[] = [];

  /**
   * Constructor para inicializar el lote de estacionamiento.
   * @param {number} numCarSpaces - Número de espacios para carros.
   * @param {number} numMotorcycleSpaces - Número de espacios para motos.
   */
  constructor(numCarSpaces: number, numMotorcycleSpaces: number) {
    // Crear espacios para carros
    for (let i = 1; i <= numCarSpaces; i++) {
      this.carSpaces.push({ id: i, type: 'auto', reservado: false });
    }

    // Crear espacios para motos
    for (let i = 1; i <= numMotorcycleSpaces; i++) {
      this.motorcycleSpaces.push({
        id: numCarSpaces + i,
        type: 'moto',
        reservado: false,
      });
    }
  }

  /**
   * Obtener espacios disponibles para carros.
   * @returns {ParkingSpace[]} Lista de espacios de carros disponibles.
   */
  getAvailableCarSpaces(): ParkingSpace[] {
    return this.carSpaces.filter((space) => !space.reservado);
  }

  /**
   * Obtener espacios disponibles para motos.
   * @returns {ParkingSpace[]} Lista de espacios de motos disponibles.
   */
  getAvailableMotorcycleSpaces(): ParkingSpace[] {
    return this.motorcycleSpaces.filter((space) => !space.reservado);
  }

  /**
   * Reservar espacio para carro.
   * @param {number} id - ID del espacio de carro a reservar.
   * @throws {Error} Si el espacio ya está reservado o no se encuentra.
   */
  reserveCarSpace(id: number): void {
    const space = this.carSpaces.find((space) => space.id === id);
    if (space) {
      if (space.reservado) {
        throw new Error('Car space is already reserved.');
      }
      space.reservado = true;
    } else {
      throw new Error('Car space not found.');
    }
  }

  /**
   * Reservar espacio para moto.
   * @param {number} id - ID del espacio de moto a reservar.
   * @throws {Error} Si el espacio ya está reservado o no se encuentra.
   */
  reserveMotorcycleSpace(id: number): void {
    const space = this.motorcycleSpaces.find((space) => space.id === id);
    if (space) {
      if (space.reservado) {
        throw new Error('Motorcycle space is already reserved.');
      }
      space.reservado = true;
    } else {
      throw new Error('Motorcycle space not found.');
    }
  }

  /**
   * Liberar espacio para carro.
   * @param {number} id - ID del espacio de carro a liberar.
   * @throws {Error} Si el espacio ya está libre o no se encuentra.
   */
  releaseCarSpace(id: number): void {
    const space = this.carSpaces.find((space) => space.id === id);
    if (space) {
      if (!space.reservado) {
        throw new Error('Car space is already free.');
      }
      space.reservado = false;
    } else {
      throw new Error('Car space not found.');
    }
  }

  /**
   * Liberar espacio para moto.
   * @param {number} id - ID del espacio de moto a liberar.
   * @throws {Error} Si el espacio ya está libre o no se encuentra.
   */
  releaseMotorcycleSpace(id: number): void {
    const space = this.motorcycleSpaces.find((space) => space.id === id);
    if (space) {
      if (!space.reservado) {
        throw new Error('Motorcycle space is already free.');
      }
      space.reservado = false;
    } else {
      throw new Error('Motorcycle space not found.');
    }
  }
}
