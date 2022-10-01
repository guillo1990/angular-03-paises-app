import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/por-pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisPorAlpha(params['id'])),
        tap(pais => {
          this.pais = pais;
          console.log("1",this.pais);
        })
      )
      .subscribe(pais => {
        this.pais = pais;
        console.log(2,pais);
    })
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     console.log(params);

    //     this.paisService.getPaisPorAlpha(params['id']).subscribe(pais => {
    //       console.log(pais);

    //     })

    //   } )
  }

}
