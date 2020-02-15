import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { FormsModule } from '@angular/forms';
import { MenueComponent } from './menue/menue.component';
import { GameComponent } from './game/game.component';
import { WinScreenComponent } from './win-screen/win-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerTableComponent,
    PlayerSelectionComponent,
    MenueComponent,
    GameComponent,
    WinScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
