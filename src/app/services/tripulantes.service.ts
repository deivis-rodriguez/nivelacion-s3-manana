import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tripulante } from '../models/tripulantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripulantesService {


  ruta = 'http://localhost:8080/tripulantes'

  constructor(private http: HttpClient) {
  }

  public listaTripulantes(): Observable<Tripulante[]> {
    return this.http.get<Tripulante[]>(this.ruta);
  }
}
