import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  players: string[] = [];
  constructor() { }

  public addPlayers(players: string[]) {
    players.forEach(player => {
      this.players.push(player);
    });
  }
}
