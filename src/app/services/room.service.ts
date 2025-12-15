import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // MockAPI endpoint
  private apiUrl = 'https://693eea3b12c964ee6b6eb05a.mockapi.io/rooms';

  constructor(private http: HttpClient) {}

  // Fetch rooms from MockAPI
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  // Book a room (update availability)
  bookRoom(room: Room): Observable<boolean> {
    const updatedRoom = {
      ...room,
      availability: false
    };

    return this.http.put<Room>(
      `${this.apiUrl}/${room.id}`,
      updatedRoom
    ).pipe(
      map(() => true)
    );
  }
}
