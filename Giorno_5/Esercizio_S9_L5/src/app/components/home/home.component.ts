import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  brandLogos!: string[];
  cars!:iAuto[];

  ngOnInit(){
    this.getCars();
  }
   async getCars(){
    const res = await fetch("../../../assets/db.json")
    const response = await res.json();
    this.cars = response;
    this.filterByBrand();
    this.randomCars();
  }

  filterByBrand(){
    this.brandLogos = [];
    this.cars.forEach((car) => {
      if (!this.brandLogos.includes(car.brandLogo)) {
        this.brandLogos.push(car.brandLogo);
      }
    });
    console.log('immagini macchine', this.brandLogos);
  }

  randomCars(){
    this.cars = this.cars.sort(() => Math.random() - 0.5);
    this.cars = this.cars.slice(0, 2);
    console.log('immagini macchine', this.cars);
  }
}
