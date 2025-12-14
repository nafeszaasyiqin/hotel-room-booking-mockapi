import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Needed for ngFor, ngIf, ngModel
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  rooms: Room[] = [];  // List of rooms fetched from service

   // Control modal visibility
  showModal = false;
  selectedRoom: Room | null = null;

  // Form fields for booking
  guestName = '';
  checkInDate = '';
  checkOutDate = '';

  constructor(private roomService: RoomService) {
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  // Open booking modal for a selected room
  openBookingModal(room: Room) {
    this.selectedRoom = room;
    this.showModal = true;
  }

   // Trigger booking, with simple form validation
  bookRoom() {
  if (!this.selectedRoom) return;

  // To make sure form is not empty
  if (!this.guestName.trim() || !this.checkInDate || !this.checkOutDate) {
    alert('Please fill in all fields before booking.');
    return;
  }

  this.roomService.bookRoom(this.selectedRoom.id).subscribe((success) => {
    if (success) {
      alert(`Room ${this.selectedRoom?.name} booked successfully!`);
      this.resetModal();
    } else {
      // Testing alert for booking failure
      alert('Booking failed! Try again.');
    }
  }); 
}

  resetModal() {
    this.showModal = false;
    this.selectedRoom = null;
    this.guestName = '';
    this.checkInDate = '';
    this.checkOutDate = '';
  }
}
