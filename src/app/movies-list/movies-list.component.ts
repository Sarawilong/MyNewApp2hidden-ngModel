import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  movies : any = [
    {
    name : "The Shawshank Redemption",
    date : 1994
    },
    {
    name : "Jaws",
    date : 1975
    },
    {
    name : "Taxis Driver",
    date : 1976
    },
    {
    name : "Apocalypse Now",
    date : 1979
    },
    {
    name : "E.T. the Extra-terrestrial",
    date : 1982
    },
  ];
  constructor() {}

  visible = true;
    toggleDiv() {
      this.visible = !this.visible;
    }

  ngOnInit() {

    
  }

}
