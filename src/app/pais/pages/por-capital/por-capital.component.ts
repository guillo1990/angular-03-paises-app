import { Component, OnInit } from '@angular/core';
import { Country } from "../../interfaces/por-pais.interface";
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  capitals: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe(resp => {
        this.capitals = resp;
        console.log(resp);
      }, err => {
        this.isError = true;
      });
  }

  sugerencias(termino: string) {
    this.buscar(termino);
  }

}
