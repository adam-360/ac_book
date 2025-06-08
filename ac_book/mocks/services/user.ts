import { faker } from '@faker-js/faker';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Flight } from 'src/app/models/flight';
import { UserProfile } from 'src/app/models/profile';

export class UserService {
  private _profiles: UserProfile[] = [];
  private currentUser = new BehaviorSubject<UserProfile | null>(null);
  currentUser$ = this.currentUser.asObservable();
  constructor() {
    this.generateProfiles();
    this.currentUser$ = this.getUser().pipe( // log in
      tap(user => {
        this.currentUser.next(user);
      })
    );
  }

  private generateProfiles(): void {
    for (let i = 0; i < 10; i++) {
      const fullName = faker.person.fullName();
      this._profiles.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ')[1],
        phoneNumber: faker.phone.number(),
        isAdmin: faker.datatype.boolean(),
        address: {
          street: faker.location.street(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          country: faker.location.country()
        },
        flights: []
      });
    }
  }

  getUser() {
    return of(this._profiles[0]);
  }

  addFlight(flight: Flight) {
    this.currentUser.value?.flights.push(flight);
  }

  removeFlight(flight: Flight) {
    const index = this.currentUser.value?.flights.findIndex((element) => {
      return flight.flightNumber === element.flightNumber;
    });

    if (index !== undefined && index > -1) {
      this.currentUser.value?.flights.splice(index, 1);
    }
  }

  public getUsers(): Observable<UserProfile[]> {
    return of(this._profiles);
  }
}