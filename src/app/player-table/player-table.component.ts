import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TableRow } from './TableRow';
import { GameService } from '../game.service';
import { WinService } from '../win.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {


  @Input() Player: string;
  @Input() isActive: boolean;
  @Input() playerIndex: number;

  @Output() enterPressed: EventEmitter<any> = new EventEmitter();

  Rows: TableRow[];
  GameMode: number;

  constructor(private gameService: GameService, private winService: WinService, private router: Router) { }

  ngOnInit() {
    this.Rows = [];
    this.GameMode = Number(this.gameService.gameMode);
    this.Rows.push(new TableRow(0, this.GameMode));
    console.log('ist Aktiv: ' + this.isActive);
  }

  onKey(event) {
    if (event.keyCode === KEY_CODE.ENTER) {
      const value = event.target.value;
      const lastLeftOver = this.Rows[this.Rows.length - 1].leftOver;
      const newLeftOver = lastLeftOver - value;

      if (newLeftOver === 0) {
        console.log('=========================================================');
        console.log('====================Spieler Hat Gewonnen=================');
        console.log('=========================================================');
        this.Rows.push(new TableRow(value, lastLeftOver - value));

        this.winService.player = this.Player;

        this.router.navigate(['win']);
        this.gameService.clean();

      } else if (newLeftOver < 0) {
        this.Rows.push(new TableRow(value, lastLeftOver));
      } else {
        this.Rows.push(new TableRow(value, lastLeftOver - value));
      }

      event.target.value = '';
      this.enterPressed.emit();
    }
  }

}

export enum KEY_CODE {
  ENTER = 13,
}
