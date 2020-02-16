import { Injectable } from '@angular/core';
import { Player } from './models/Player';

@Injectable({
  providedIn: 'root'
})

export class WinService {

  player: Player;

  constructor() { }

  clean() {
    this.player = null;
  }
}
