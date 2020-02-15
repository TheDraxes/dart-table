import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WinService {

  player: string;

  constructor() { }

  clean() {
    this.player = "";
  }
}
