import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
       
  name: string = 'Bruna';
  age: number = 26;
  job = 'Programmer!';
  hobbies = ['correr','jogar','estudar'];
  car ={
    name: 'polo',
    year: 2019,
  };
  constructor(){}

  ngOnInit(): void {
  }
}
