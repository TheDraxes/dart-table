export class PlayerTable {
  index: number;
  player: string;
  active: boolean;

  constructor(INDEX: number, PLAYER: string) {
    this.index = INDEX;
    this.player = PLAYER;
    this.active = false;
  }
}
