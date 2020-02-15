import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenueComponent } from './menue/menue.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: 'player', component: PlayerSelectionComponent},
  {path: 'game', component: GameComponent},

  // muss zwingend die letzte Route sein!
  {path: '', component: MenueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
