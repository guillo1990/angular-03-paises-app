import { Component } from '@angular/core';
import { Country } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        this.countries = resp;
        console.log(resp);
      }, err => {
        this.isError = true;
      });
  }

  sugerencias(termino: string) {
    this.buscar(termino);
  }

}
