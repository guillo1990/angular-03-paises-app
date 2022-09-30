import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/por-pais.interface';

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

  buscar() {
    this.isError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        this.countries = resp;
        console.log(resp);
      }, err => {
        this.isError = true;
        this.countries = [];
      });
  }

}
