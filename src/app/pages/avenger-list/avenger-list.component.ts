import { Component, OnInit } from '@angular/core';
import { IAvenger } from './models/avengers.models';
import { avengers } from './avengers-list.config';
@Component({
  selector: 'app-avenger-list',
  templateUrl: './avenger-list.component.html',
  styleUrls: ['./avenger-list.component.scss']
})
export class AvengerListComponent implements OnInit {

  public avengers: IAvenger[] = avengers as IAvenger[];
  public filteredAvengers: IAvenger[] = this.avengers;
  public canModify: boolean = false;
  public filterValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onModify() {
    this.canModify = !this.canModify;
  }

  public onDelete(hero: string) {
    this.avengers = this.avengers.filter(avenger => avenger.hero !== hero);
    this.filterValue = "Deleted";
  }

  public onFilter() {
    this.filteredAvengers = this.avengers.filter(avenger => {
      return avenger.hero.toLowerCase().includes(this.filterValue.toLowerCase());
    });
  }

}
