import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { TeamsApiRequest } from '../games/game.model';

@Component({
  standalone: true,
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  providers:  [ TeamsService ],
  imports: [ HttpClientModule, CommonModule  ]  
})
export class TeamsComponent implements OnInit {
  public teamsData: TeamsApiRequest | undefined;

  constructor(private teamsService: TeamsService){}

  ngOnInit() {
    this.teamsService.getTeams()
    .subscribe((data: TeamsApiRequest) => {
      this.teamsData = data;
      console.log(this.teamsData);
    });
  }
}