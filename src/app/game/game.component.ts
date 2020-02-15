import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerTable } from './PlayerTable';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: string[];
  activeTableID = 0;
  playerTables: PlayerTable[] = [];

  activeIndex: number;

  constructor( private gameService: GameService ) { }

  ngOnInit() {
    this.players = this.gameService.player;

    this.activeIndex = 0;


    for (let i = 0; i < this.players.length; i++) {
      this.playerTables.push(new PlayerTable(i, this.players[i]));
    }

    this.playerTables[this.activeIndex].active = true;

  }

  last() {
    this.playerTables[this.activeIndex].active = false;
    this.activeIndex = this.activeIndex + 1;

    if (this.activeIndex > this.playerTables.length - 1) {
      this.activeIndex = 0;
    }

    this.playerTables[this.activeIndex].active = true;
  }

  next() {

    this.playerTables[this.activeIndex].active = false;
    this.activeIndex = this.activeIndex - 1;

    if (this.activeIndex < 0) {
      this.activeIndex = this.playerTables.length - 1;
    }

    this.playerTables[this.activeIndex].active = true;
  }

}
