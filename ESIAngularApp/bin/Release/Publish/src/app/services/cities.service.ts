
import { Injectable } from '@angular/core';
import { City } from "../models/city";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const API_BASE_URL: string = "https://localhost:7182/api/Cities";

@Injectable({
  providedIn: 'root'
})

export class CitiesService {
  cities: City[] = [];

  headers = new HttpHeaders();

  constructor (private httpClient: HttpClient) {
    this.headers = this.headers.append("Authorization", "Bearer mytoken");
  }

  public getCities (): Observable<City[]> {

    return this.httpClient.get<City[]>(`${API_BASE_URL}`, { headers: this.headers })
  }

  public postCity (city: City): Observable<City> {

    return this.httpClient.post<City>(`${API_BASE_URL}`, city, { headers: this.headers })
  }

  public putCity (city: City): Observable<City> {

    return this.httpClient.put<City>(`${API_BASE_URL}`, city, { headers: this.headers })
  }
}
