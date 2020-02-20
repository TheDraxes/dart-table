export class Player {
  name: string;

  public legs: number;
  public leftOver: number;
  public roundsPlayed: number;

  constructor(name: string) {
    this.name = name;
    this.legs = 0;
    this.leftOver = 0;
    this.roundsPlayed = 0;
  }
}
