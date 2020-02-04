import { Component, OnInit, ElementRef } from '@angular/core';
import { GameService } from "../game.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  gameStarted: boolean;
  gameMode: string;


  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  setGameMode() {
    console.log(this.gameMode);
    this.router.navigate(['player']);
  }

}
