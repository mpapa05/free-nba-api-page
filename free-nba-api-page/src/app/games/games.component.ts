import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { HttpClientModule } from '@angular/common/http';
import { GamesApiRequest } from './game.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
  providers:  [ GamesService ],
  imports: [ HttpClientModule, CommonModule  ]  
})
export class GamesComponent implements OnInit {
  public gamesData: GamesApiRequest | undefined;

  constructor(private gamesService: GamesService){}
  ngOnInit() {
    this.gamesService.getGames()
    .subscribe((data: GamesApiRequest) => {
      this.gamesData = data;
      console.log(this.gamesData);
    });
  }
}