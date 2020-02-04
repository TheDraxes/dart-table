import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {

  public players: any[] = [{
    name: '',
  }];

  @Output() start: EventEmitter<any> = new EventEmitter();

  constructor(private gameService: GameService) { }

  ngOnInit() {

  }

  addPlayer() {
    this.players.push({name: ''});
  }

  startPlaying() {
    this.players.forEach(player => {
      console.log(player.name);
      this.gameService.addPlayer(player);
      this.start.emit();
    });

  }

}
