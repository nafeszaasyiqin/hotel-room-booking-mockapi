import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';

@Component({
  selector: 'app-root',
   standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-booking';
}
