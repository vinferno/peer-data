import { Component, OnInit } from '@angular/core';
import { RoundsService } from 'src/app/services/rounds.service';

@Component({
  selector: 'app-round-list',
  templateUrl: './round-list.component.html',
  styleUrls: ['./round-list.component.scss']
})
export class RoundListComponent implements OnInit {

 

  constructor(
    private roundsService: RoundsService
  ) { }

  ngOnInit(): void {
  }

  get list() {
    return this.roundsService.list;
  }

  createNewRound() {
    this.roundsService.createNewRound();
  }

 

}
