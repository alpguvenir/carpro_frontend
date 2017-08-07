import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Carpro} from './carpro.model';

@Component({
  selector: 'app-user',
  templateUrl: './carpro.component.html',
  styleUrls: ['./carpro.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  cars: string[];
  carpros: Carpro[];

  //
  toggleGet: boolean = false;
  brand: string;
  yearEstablished: number;


  constructor(private dataService: DataService) {
    console.log('constructor ran..');
  }

  // Overrides what has been initialized above
  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name = 'Alp Güvenir';
    this.age = 22;
    this.cars = ['carpro1', 'carpro2', 'carpro3'];
    this.onClick();
  }

  onClick() {
    this.dataService.getCarpros().subscribe((posts) => {
      console.log(posts)
      this.carpros = posts;
    });
    this.toggleGet = !this.toggleGet;
  }

  /*
  onClick2() {
    this.dataService.getCarpros().subscribe((posts) => {
      console.log(posts)
      this.carpros = posts;
    });
  }
  */

  /*
  addCar(car) {
    console.log(car);
    this.cars.push(car);
    return false;
  }
  */

  addCar(brand, yearEstablished) {
    console.log(brand);
    console.log(yearEstablished);
    const obj1 = new Carpro(0, brand, yearEstablished);
    this.dataService.addCarpros(obj1).subscribe();
    this.onClick();
    this.onClick();
    return false;
  }

  updateCar(id, brand, yearEstablished) {
    console.log(brand);
    console.log(yearEstablished);
    const obj1 = new Carpro(0, brand, yearEstablished);
    this.dataService.updateCarpros(obj1, id).subscribe();
    console.log(id);
    console.log(obj1);
    this.onClick();
    this.onClick();
    return false;
  }

  deleteCar(id) {
    console.log(id);
    /*
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i] === id) {
        this.cars.splice(i, 1);
      }
    }
    */
    this.dataService.deleteCarpros(id).subscribe();
    this.onClick();
    this.onClick();
    return false;
  }

}

