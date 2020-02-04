import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {

  public players: any[] = [{
    name: '',
  }];

  constructor() { }

  ngOnInit() {

  }

  addPlayer() {
    this.players.push({name: ''});
  }

  startPlaying() {
    this.players.forEach(player => {
      console.log(player.name);
    });
  }

}
