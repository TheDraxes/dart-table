import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TableRow } from '../models/TableRow';
import { GameService } from '../game.service';
import { WinService } from '../win.service';
import { Router } from '@angular/router';
import { Player } from '../models/Player';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {


  @Input() Player: Player;
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
  }

  onKey(event) {
    if (event.keyCode === KEY_CODE.ENTER) {
      const value = event.target.value;
      const lastLeftOver = this.Rows[this.Rows.length - 1].leftOver;
      const newLeftOver = lastLeftOver - value;

      if (newLeftOver === 0) {

        this.Rows.push(new TableRow(value, lastLeftOver - value));

        this.winService.player = this.Player;
        this.Player.legs++;

        this.router.navigate(['win']);

      } else if (newLeftOver < 0) {
        this.Rows.push(new TableRow(value, lastLeftOver));
      } else {
        this.Rows.push(new TableRow(value, lastLeftOver - value));
      }

      this.updatePlayerData();

      event.target.value = '';
      this.enterPressed.emit();
    }
  }

  updatePlayerData() {
    this.gameService.player.forEach(player => {
      if (player.name === this.Player.name) {
        player.roundsPlayed++;
        player.leftOver = this.Rows[this.Rows.length - 1].leftOver;
      }
    });
  }
}

export enum KEY_CODE {
  ENTER = 13,
}
