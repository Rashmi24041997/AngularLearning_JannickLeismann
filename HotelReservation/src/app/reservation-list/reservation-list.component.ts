import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservations().subscribe(
      reservations => {
        this.reservations = reservations;
      }
    );
  }

  editReservation(arg0: string) {
    throw new Error('Method not implemented.');
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
    console.log("Delete succesful");
  }

}
