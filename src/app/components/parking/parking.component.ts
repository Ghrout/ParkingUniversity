import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingSpace } from '../../models/parking-space.model';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { ParkingService } from '../../services/parking.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, FormsModule, ButtonComponent],
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent {
  espacios: ParkingSpace[] = [];
  tipo: '' | 'auto' | 'moto' = '';
  vehiculoSelected: boolean = false;
  plate: string = '';
  duration: number | null = null;

  constructor(private parkingService: ParkingService) {
    this.espacios = this.parkingService.getAvailableSpaces();
  }

  reserveSpace(id: number): void {
    try {
      const spaceToReserve = this.espacios.find(space => space.id === id);
      if (spaceToReserve) {
        spaceToReserve.plate = this.plate;
        spaceToReserve.duration = this.duration;
        this.parkingService.reserveSpace(id, this.plate, this.duration);
        this.espacios = this.parkingService.getAvailableSpaces();
        this.plate = '';
        this.duration = null;
      }
    } catch (error) {
      console.error(error);
    }
  }

  releaseSpace(id: number): void {
    this.parkingService.releaseSpace(id);
    this.espacios = this.parkingService.getAvailableSpaces();
  }

  getFilteredSpaces(): ParkingSpace[] {
    return this.espacios.filter((space) => space.type === this.tipo);
  }

  vehiculo(): void {
    if (this.tipo) {
      this.vehiculoSelected = true;
    }
  }

  updateInputs(space: ParkingSpace): void {
    if (!space.reservado) {
      this.plate = 'Número de placa';
      this.duration = 1;
    }
  }
}
