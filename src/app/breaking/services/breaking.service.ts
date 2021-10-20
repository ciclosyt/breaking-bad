import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../interfaces/personajes.interfaces'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakingService {

  constructor( private http: HttpClient ) { }

  getPersonajes(): Observable<Personajes[]>{

    return this.http.get<Personajes[]>('https://breakingbadapi.com/api/characters')

  }

  getPersonajeId( id: number ) :Observable<Personajes[]>{


    return  this.http.get<Personajes[]>(`https://breakingbadapi.com/api/characters/${ id }`)

  }







}
