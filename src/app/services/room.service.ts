import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
   // Hardcoded mock rooms
  private rooms: Room[] = [
    { id: 1, name: '101', type: 'Single', price: 150, availability: true },
    { id: 2, name: '102', type: 'Double', price: 250, availability: true },
    { id: 3, name: '103', type: 'Suite', price: 350, availability: true },
    { id: 4, name: '201', type: 'Double', price: 330, availability: true },
    { id: 5, name: '202', type: 'Single', price: 199, availability: false }
  ];
   // BehaviorSubject to simulate API
  private roomsSubject = new BehaviorSubject<Room[]>(this.rooms);

    // Get rooms as Observable
  getRooms(): Observable<Room[]> {
    return this.roomsSubject.asObservable();
  }

   // Book a room (simulate API)
  bookRoom(roomId: number): Observable<boolean> {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.availability) {
      room.availability = false;  // mark booked
      this.roomsSubject.next(this.rooms);
      return of(true);
    }
    return of(false);// booking failed
  }
}
