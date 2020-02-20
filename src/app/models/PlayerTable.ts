import { Player } from './Player';

export class PlayerTable {
  index: number;
  player: Player;
  active: boolean;

  constructor(INDEX: number, PLAYER: Player) {
    this.index = INDEX;
    this.player = PLAYER;
    this.active = false;
  }
}
