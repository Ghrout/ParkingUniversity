export interface ParkingSpace {
  id: number;
  type: 'auto' | 'moto';
  reservado: boolean;
  plate?: string;
  duration?: number | null;
}
