import { Injectable } from '@angular/core';
import { Player } from './models/Player';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  gameMode: string;
  player: Player[] = [];

  constructor() { }

  addPlayer(player: any) {
    const pl = new Player(player.name);
    this.player.push(pl);
  }

  setGameMode(gameMode: string) {
    this.gameMode = gameMode;
  }

  clean() {
    this.gameMode = '';
    this.player = [];
  }

  newGame() {
    this.player.forEach(p => {
      p.roundsPlayed = 0;
    });
  }
}
