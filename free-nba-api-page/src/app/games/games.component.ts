import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { HttpClientModule } from '@angular/common/http';
import { Game, GamesApiRequest } from './game.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
  providers:  [ GamesService ],
  imports: [ HttpClientModule, CommonModule  ]  
})
export class GamesComponent implements OnInit{
  public gamesData: GamesApiRequest | undefined;

  constructor(private gamesService: GamesService){}
  ngOnInit() {
    this.gamesService.getGames()
    .subscribe((data: GamesApiRequest) => {
      // console.log(data.data[0]);
      // console.log(data.meta);
      this.gamesData = data;
    });
    // console.log('GamesComponent.ngOnInit', this.gamesData);
  }

  public getGames(): Observable<GamesApiRequest> {
    return this.gamesService.getGames();
  }
}