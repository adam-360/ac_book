import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Flight } from "../models/flight";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private httpClient: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('/api/flight');
  }
}