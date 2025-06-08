import { BehaviorSubject, Observable } from "rxjs";
import { UserProfile } from "../models/profile";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Flight } from "../models/flight";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser = new BehaviorSubject<UserProfile | null>(null);
  currentUser$ = this.currentUser.asObservable();
  constructor(private httpClient: HttpClient) { }
  public addFlight(flight: Flight) {}
  public removeFlight(flight: Flight) {}
  public getUsers(): Observable<UserProfile[]> {
    return this.httpClient.get<UserProfile[]>('/api/users');
  }
}