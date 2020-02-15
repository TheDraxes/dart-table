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

  constructor( private gameService: GameService ) { }

  ngOnInit() {
    this.players = this.gameService.player;

    for (let i = 0; i < this.players.length; i++) {
      this.playerTables.push(new PlayerTable(i, this.players[i]));
    }

  }

}
