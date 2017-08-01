import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  cars: string[];

  constructor(private dataService: DataService) {
    console.log('constructor ran..');

  }

  // Overrides what has been initialized above
  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name = 'Alp Güvenir';
    this.age = 22;
    this.cars = ['carpro1', 'carpro2', 'carpro3'];
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }

  onClick() {
    this.name = 'AG';
    this.cars.push('caproNEW');
  }

  addCar(car) {
    console.log(car)
    this.cars.push(car)
    return false;
  }

  deleteCar(smt) {
    for(let i = 0; i<this.cars.length; i++) {
      if(this.cars[i] == smt) {
        this.cars.splice(i,1);
      }
    }
  }

}
