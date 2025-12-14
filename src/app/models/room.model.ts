export interface Room {
  id: number;
  name: string;      
  type: 'Single' | 'Double' | 'Suite';
  price: number;
  availability: boolean; // true = available, false = booked
}
