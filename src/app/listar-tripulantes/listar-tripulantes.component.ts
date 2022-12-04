import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../models/tripulantes';
import { TripulantesService } from '../services/tripulantes.service';

@Component({
  selector: 'app-listar-tripulantes',
  templateUrl: './listar-tripulantes.component.html',
  styleUrls: ['./listar-tripulantes.component.css']
})
export class ListarTripulantesComponent implements OnInit {
  public listaTripulantes: Tripulante[] = [];

  constructor(private tripulanteServicio: TripulantesService) {
  }

  ngOnInit(): void {
    this.tripulanteServicio.listaTripulantes().subscribe((tripulantes) => { 
      this.listaTripulantes = tripulantes;
    })
  }

}
