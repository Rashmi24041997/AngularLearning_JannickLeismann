import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001/";

  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) { }

  //CRUD
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}reservations`);
  }

  getReservation(id: string): Observable<Reservation> | undefined {
    return this.http.get<Reservation>(`${this.apiUrl}reservation/${id}`);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    console.log(this.reservations);
    // this.http.post(`${this.apiUrl}reservations/${id}`);
    // localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): Observable<void> {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    return this.http.delete<void>(`${this.apiUrl}reservation/${id}`);
    // localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void>  {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
    return this.http.put<void>(`${this.apiUrl}reservation/${id}`, updatedReservation);
    // localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
