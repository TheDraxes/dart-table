import { Component, OnInit } from '@angular/core';
import { WinService } from "../win.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-win-screen',
  templateUrl: './win-screen.component.html',
  styleUrls: ['./win-screen.component.css']
})
export class WinScreenComponent implements OnInit {

  winner: string;

  constructor(public winService: WinService, public router: Router) { }

  ngOnInit() {
    this.winner = this.winService.player;
  }

  home() {
    this.router.navigate(['/']);
  }
}
