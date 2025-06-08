import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';
import { UserProfile } from 'src/app/models/profile';
import { UserService } from 'src/app/services/user';
@Component({
  selector: 'app-book-flight-dialog',
  templateUrl: './book-flight-dialog.component.html',
  styleUrls: ['./book-flight-dialog.component.scss']
})
export class BookFlightDialogComponent {
  currentUser: UserProfile | null = null;
  constructor(public dialogRef: MatDialogRef<BookFlightDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flightData: Flight,
    private userService: UserService) {
      this.userService.currentUser$.subscribe((value)=>{
        this.currentUser = value;
      });
    }

  get duration() {
    var difference = this.flightData.arrivalTime; // pretending this is the actual difference
    return difference.getHours() + "h " + this.addZero(difference.getMinutes()) + "m";
  }

  formatTime(time: Date) {
    return this.addZero(time.getHours()) + ":" + this.addZero(time.getMinutes());
  }

  addZero(time: number) {
    if (time < 10) return "0" + time;
    return time;
  }

  addFlight() {
    this.userService.addFlight(this.flightData);
    this.closeDialog();
  }

  removeFlight() {
    this.userService.removeFlight(this.flightData);
    this.closeDialog();
  }

  containsFlight(): boolean {
    return this.currentUser?.flights.includes(this.flightData) || false;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
