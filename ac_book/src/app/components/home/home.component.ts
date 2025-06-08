import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { UserProfile } from 'src/app/models/profile';
import { UserService } from 'src/app/services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser: UserProfile | null = null;
  constructor(private userService: UserService) {
    this.userService.currentUser$.subscribe((value) => {
      this.currentUser = value;
    });
  }

  getFlightClass(flightID: number) {
      if (flightID % 3 === 1) return 'First Class';
      if (flightID % 3 === 2) return 'Business';
      return 'Economy';
  }

  delete(flight: Flight) {
    this.userService.removeFlight(flight)
  }

}
