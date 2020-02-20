import { Component, OnInit } from '@angular/core';
import { WinService } from '../win.service';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Player } from '../models/Player';

@Component({
  selector: 'app-win-screen',
  templateUrl: './win-screen.component.html',
  styleUrls: ['./win-screen.component.css']
})
export class WinScreenComponent implements OnInit {

  winner: Player;

  constructor(public winService: WinService, public gameService: GameService, public router: Router) { }

  ngOnInit() {
    this.winner = this.winService.player;
  }

  home() {
    this.winService.clean();
    this.gameService.clean();
    this.router.navigate(['/']);
  }

  newGame() {
    this.gameService.newGame();
    this.router.navigate(['game']);
  }
}
