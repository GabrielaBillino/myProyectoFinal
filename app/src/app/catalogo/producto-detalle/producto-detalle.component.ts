import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VestimentaService } from 'src/app/abm/vestimenta/vestimenta.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  _producto: any;
  constructor(private _activatedRoute: ActivatedRoute,private _vestimentaService: VestimentaService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(route =>{
      const id = route.getAll('id');

      if(id !==null){
        this._vestimentaService.getVestimentas().subscribe((response:any) =>{
          this._producto = response.filter((item:any) => {
            return item.id === id;
          })
        })
      }
    } )
  }

}
