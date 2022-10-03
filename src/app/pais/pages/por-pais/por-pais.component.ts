import { Component } from '@angular/core';
import { Country } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggeredCountries: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        this.countries = resp;
      }, err => {
        this.isError = true;
      });
  }

  sugerencias(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.suggeredCountries = [];

    this.paisService.buscarPais(termino)
      .subscribe(resp => {
        this.suggeredCountries = resp.splice(0,3);
      }, err => {
        this.suggeredCountries = [];
      });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.suggeredCountries = [];
  }

}
