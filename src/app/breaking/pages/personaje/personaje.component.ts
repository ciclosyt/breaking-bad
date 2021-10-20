import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personajes } from '../../interfaces/personajes.interfaces';
import { BreakingService } from '../../services/breaking.service';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {


person!: Personajes[];


  constructor( private activatedRouter: ActivatedRoute,
                private bs: BreakingService,
                private router: Router ) { }



  ngOnInit(): void {

    
    
    this.activatedRouter.params
     .pipe(
       switchMap( ({id}) => this.bs.getPersonajeId(id))
     )
      
      .subscribe( 

        
        persona => this.person = persona
        
      
        
        
        
     )
  }

  regresar(){
    this.router.navigate(['/breaking/listado'])
  }

}
