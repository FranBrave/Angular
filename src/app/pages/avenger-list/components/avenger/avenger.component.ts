import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAvenger } from '../../models/avengers.models';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent implements OnInit {

  @Input() public avenger?: IAvenger;
  @Input() public canDelete: boolean = false;
  @Output() public delete: EventEmitter<void> = new EventEmitter();

  public isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete() {
    this.delete.emit();
  }

  public onClick() {
    this.isSelected = !this.isSelected;
  }

}
