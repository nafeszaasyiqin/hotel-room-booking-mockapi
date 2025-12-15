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

  rooms: Room[] = [] ;// all room from API
  selectedType = ''; //selected filter
  roomTypes: string[] = [] ; //uniquew room type


  // Control modal visibility
  showModal = false;
  selectedRoom: Room | null = null;

  // Form fields for booking
  guestName = '';
  checkInDate = '';
  checkOutDate = '';

  constructor(private roomService: RoomService) {
    this.loadRooms();
  }

  // Load rooms from MockAPI
  loadRooms() {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;

      //unique type of room for filter
      this.roomTypes= [... new Set(rooms.map(room=> room.type))];
    });
  }

  filteredRooms(){
    if(!this.selectedType){
      return this.rooms;
    }
    return this.rooms.filter(room=> room.type ===this.selectedType);
  }


  // Open booking modal for a selected room
  openBookingModal(room: Room) {
    this.selectedRoom = room;
    this.showModal = true;
  }

  // Trigger booking with validation
  bookRoom() {
    if (!this.selectedRoom) return;

    // Simple form validation
    if (!this.guestName.trim() || !this.checkInDate || !this.checkOutDate) {
      alert('Please fill in all fields before booking.');
      return;
    }

    // Call MockAPI to update room availability
    this.roomService.bookRoom(this.selectedRoom).subscribe(success => {
      if (success) {
        alert(`Room ${this.selectedRoom?.name} booked successfully!`);
        this.resetModal();
        this.loadRooms(); // Refresh list after booking
      } else {
        alert('Booking failed! Try again.');
      }
    });
  }

  // Reset modal and form
  resetModal() {
    this.showModal = false;
    this.selectedRoom = null;
    this.guestName = '';
    this.checkInDate = '';
    this.checkOutDate = '';
  }
}
