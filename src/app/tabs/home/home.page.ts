import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  categories = {
    ecology:'Ecology',
    energy:'Energy',
    residence:'Residence',
    roads:'Roads',
    water:'Water',
    social:'Social',
    financial:'Financial',
    education:'Education'
  };

  constructor() {}

}
