import { Component } from "@angular/core";
import { Flight } from "src/app/models/flight";
import { FlightService } from "src/app/services/flight";
import { MatDialog } from '@angular/material/dialog';
import { BookFlightDialogComponent } from "./book-flight-dialog/book-flight-dialog.component";
@Component({
    templateUrl: './book-flight.html',
    styleUrls: ['./book-flight.scss'],
    selector: 'app-book-flight'
})
export class BookFlightComponent { 
    private _flights: Flight[] = [];
    public displayedColumns: string[] = ['id', 'flightNumber', 'departure', 'arrival', 'departureTime', 'arrivalTime', 'price', 'actions'];
    filter = '';
    get flights(): Flight[] {
        return this._flights.filter((flight) => {
            var match = false;
            Object.values(flight).forEach(value => {
                match = match || value.toString().toUpperCase().includes(this.filter.toUpperCase());
            });
            return match;
        });
    }
    constructor(private flightService: FlightService, private matDialog: MatDialog) {
        this.flightService.getFlights().subscribe({
            next: (flights: Flight[]) => {
                this._flights = flights;
            },
            error: (err) => {
                console.error('Error fetching flights:', err);
            }
        });
    }

    book(flight: Flight) {
        const buttonElement = document.activeElement as HTMLElement;
        buttonElement.blur();
        const dialogRef = this.matDialog.open(BookFlightDialogComponent, {
            data: flight,
        });

        dialogRef.afterClosed().subscribe(result => {});
    }
}