export class PlayerTable {
  index: number;
  player: string;
  active: boolean;

  constructor(_index: number, _player: string) {
    this.index = _index;
    this.player = _player;
    this.active = false;
  }
}
