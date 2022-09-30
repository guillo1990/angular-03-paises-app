import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/por-pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent {

  @Input() countries: Country[] = [];

  constructor() { }

}
