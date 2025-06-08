import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Flight } from 'src/app/models/flight';

export class FlightService {
  constructor() { }

  getFlights(): Observable<Flight[]> {
    const flights: Flight[] = [];
    for (let i = 1; i <= 10; i++) {
      flights.push({
        id: i,
        flightNumber: faker.string.alphanumeric(5).toUpperCase(),
        departure: faker.location.city(),

        departureAirport: faker.airline.airport().name,
        departureAirportCode: faker.airline.airport().iataCode,
        arrival: faker.location.city(),
        arrivalAirport: faker.airline.airport().name,
        arrivalAirportCode: faker.airline.airport().iataCode,
        departureTime: faker.date.future(),
        arrivalTime: faker.date.future(),
        price: parseFloat(faker.commerce.price()),
        aircraft: faker.airline.airplane().name
      });
    }
    return of(flights);
  }
}