import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }`
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  countries: Country[] = [];
  isError: boolean = false;
  loading: boolean = false;

  constructor(private paisService: PaisService) { }

  getClassCSS(region: string) {
    if (region === this.regionActiva) {
      return 'btn btn-primary';
    }
    else {
      return 'btn btn-outline-primary';
    }
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.buscarRegion(region);
  }

  buscarRegion(region: string) {
    this.loading = true;
    this.paisService.getPaisPorRegion(region)
      .subscribe(resp => {
        this.countries = resp;
        this.loading = false;
      }, err => {
        this.isError = true;
        this.loading = false;
      });
  }
}
