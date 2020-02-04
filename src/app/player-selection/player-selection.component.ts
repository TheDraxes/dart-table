import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from "../game.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {

  public players: any[] = [{
    name: '',
  }];

  public gameMode: string;

  @Output() start: EventEmitter<any> = new EventEmitter();

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.gameMode = this.gameService.gameMode;
  }

  addPlayer() {
    this.players.push({name: ''});
  }

  startPlaying() {
    this.players.forEach(player => {
      console.log(player.name);
      this.gameService.addPlayer(player);
      //this.start.emit();
    });
  }

  navBack() {
    this.router.navigate(['/']);
  }

}
