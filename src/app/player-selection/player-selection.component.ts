import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
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

  // tslint:disable-next-line: no-output-native
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
      this.gameService.addPlayer(player);
      this.router.navigate(['game']);
    });
  }

  navBack() {
    this.router.navigate(['/']);
  }

}
