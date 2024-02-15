import { Component } from '@angular/core';
import { PlayersService } from './players.service';
import { PlayersApiRequest } from '../games/game.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
  providers:  [ PlayersService ],
  imports: [ HttpClientModule, CommonModule  ]  
})
export class PlayersComponent {
  public playersData: PlayersApiRequest | undefined;

  constructor(private playersService: PlayersService){}
  
  ngOnInit() {
    this.playersService.getPlayers()
    .subscribe((data: PlayersApiRequest) => {
      this.playersData = data;
      console.log(this.playersData)
    });
  }
}