import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  gameMode: string;
  player: string[] = [];

  constructor() { }

  addPlayer(player: any) {
    this.player.push(player.name);
  }

  setGameMode(gameMode: string) {
    this.gameMode = gameMode;
  }
}
