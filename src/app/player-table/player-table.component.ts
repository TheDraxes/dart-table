import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TableRow } from './TableRow';
import { GameService } from "../game.service";

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {


  @Input() Player: string;
  @Input() isActive: boolean;

  Rows: TableRow[];
  GameMode: number;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.Rows = [];
    this.GameMode = Number(this.gameService.gameMode);
    this.Rows.push(new TableRow(0, this.GameMode));
    console.log("ist Aktiv: " + this.isActive);
  }

  onKey(event) {
    if(event.keyCode === KEY_CODE.ENTER) {
      this.addNewRow(event.target.value);
    }
  }

  addNewRow(value: number) {
    console.log(value);
    const last = this.Rows[this.Rows.length - 1].leftOver;
    this.Rows.push(new TableRow(value, last - value));
  }

}

export enum KEY_CODE {
  ENTER = 13,
}
