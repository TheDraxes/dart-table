import { Component, OnInit, ElementRef } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  gameStarted: boolean;
  gameMode: string;


  constructor(private gameService: GameService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  setGameMode() {
    if (this.gameMode !== undefined && this.gameMode !== '') {
      console.log(this.gameMode);
      this.router.navigate(['player']);
      this.gameService.setGameMode(this.gameMode);
    } else {
      this.showToastMessage();
      return;
    }
  }

  showToastMessage() {
    this.toastrService.error('Du musst einen Spielmodus wählen!', '', {
      positionClass: 'toast-bottom-right'
    });
  }

}
