import { Component, OnInit } from '@angular/core';
import { BreakingService } from '../../services/breaking.service';
import { Personajes } from '../../interfaces/personajes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lista: Personajes[] = [] 

  constructor( private bs: BreakingService ) { }

  ngOnInit(): void {

    this.bs.getPersonajes()
      .subscribe( resp => {
        this.lista = resp
      } )

  }

}
