import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TableRow } from './TableRow';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  @Input() GameMode: number;
  @Input() Player: string;

  Rows: TableRow[];

  constructor() { }

  ngOnInit() {
    this.Rows = [];
    this.Rows.push(new TableRow(0, this.GameMode));
  }

  onKey(event) {
    if(event.keyCode === KEY_CODE.ENTER) {
      this.addNewRow(event.target.value);
    }
  }

  addNewRow(value: number) {
    console.log(value);
    let last = this.Rows[this.Rows.length - 1].leftOver;
    this.Rows.push(new TableRow(value, last - value));
  }

}

export enum KEY_CODE {
  ENTER = 13,
}
