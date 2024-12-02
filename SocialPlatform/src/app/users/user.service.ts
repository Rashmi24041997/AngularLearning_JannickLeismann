import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[] = [
    { id: 1, name: "Rashmi" }
    , { id: 2, name: "Gupta" }
  ];
  constructor() { }

  getUsers() {
    return of(this.users);
  }
}
