import { Component, OnInit } from '@angular/core';
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

  constructor(private paisService: PaisService) { }

  buscar() {
    this.isError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp[0]);
      }, err => {
        this.isError = true;
      });
  }

}
