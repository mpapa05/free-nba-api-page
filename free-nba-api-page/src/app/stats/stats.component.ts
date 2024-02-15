import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatsService } from './stats.service';
import { StatsApiRequest } from '../games/game.model';

@Component({
  standalone: true,
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  providers:  [ StatsService ],
  imports: [ HttpClientModule, CommonModule ]  
})
export class StatsComponent implements OnInit {
  public statsData: StatsApiRequest | undefined;

  constructor(private statsService: StatsService) {};

  ngOnInit() {
    this.statsService.getStats()
    .subscribe((data: StatsApiRequest) => {
      this.statsData = data;
      console.log(this.statsData);
    });
  }
}