import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/Player';
import { GameService } from '../game.service';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.css']
})
export class StickyBarComponent implements OnInit {

  @Input() player: Player;
  @Input() isActive: boolean;

  @Output() left: EventEmitter<any> = new EventEmitter();
  @Output() right: EventEmitter<any> = new EventEmitter();

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

  computeAverage() {
    return this.round((Number(this.gameService.gameMode) - this.player.leftOver) / (this.player.roundsPlayed), 2);
  }

  round(n, precision) {
    const factor = Math.pow(10, precision);
    const tempNumber = n * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  rightCl() {
    this.left.emit();
  }

  leftCl() {
    this.right.emit();
  }

}
