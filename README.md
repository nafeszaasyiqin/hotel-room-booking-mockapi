# Hotel Room Booking Application

A simple **Hotel Room Booking Engine** built with **Angular**. Users can view available rooms and book them via a modal form. External Mock API The application demonstrates using [mockapi.io](https://mockapi.io).

---

## How to Run the Application

### Prerequisites
- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Steps
1. Clone the repository:

```bash
git clone <YOUR_REPO_URL>
cd hotel-room-booking
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
ng serve
```
4. Open your browser and navigate to:
```arduino
http://localhost:4200/
```

## Design Decisions

### Standalone Components
I used standalone components in Angular. This makes each component more independent and avoids extra setup like declaring components inside modules.

### Mock Service / API
Instead of connecting to a real backend, I used a mock service using MockAPI for demo purposes

### Simple Form Validation
I added basic checks to make sure users fill in all fields before booking a room.



