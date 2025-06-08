export interface Flight {
    id: number;
    flightNumber: string;
    departure: string;
    departureAirport: string;
    departureAirportCode: string;
    arrival: string;
    arrivalAirport: string;
    arrivalAirportCode: string;
    departureTime: Date;
    arrivalTime: Date;
    price: number;
    aircraft: string;
}