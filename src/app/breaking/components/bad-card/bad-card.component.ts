import { Component, Input } from '@angular/core';
import { Personajes } from '../../interfaces/personajes.interfaces';

@Component({
  selector: 'app-bad-card',
  templateUrl: './bad-card.component.html',
  styleUrls: ['./bad-card.component.css']
})
export class BadCardComponent  {

  @Input() item!: Personajes;

  

}
