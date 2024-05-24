import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  cars!:iAuto[];
  foto!:string;
  ngOnInit(){
    this.getCars();
  }
   async getCars(){
    const res = await fetch("../../../assets/db.json")
    const response = await res.json();
    this.cars = response;
    this.filterByBrand();
    this.foto = this.cars[0].brandLogo
  }

  filterByBrand(){
    this.cars = this.cars.filter((car) => car.brand === "Audi");
  }
}
