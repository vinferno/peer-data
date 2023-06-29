import { Component, OnInit } from '@angular/core';
import { Dev, DevsService } from 'src/app/services/devs.service';
import { PairsService } from 'src/app/services/pairs.service';
import { RoundsService } from 'src/app/services/rounds.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {
  topRow: Dev[] = [];
  bottomRow: Dev[] = [];
  constructor(
    public devsService: DevsService,
    public pairsService: PairsService,
    public roundsService: RoundsService
  ) {}

  ngOnInit(): void {
  }

  get list() {
    return this.devsService.list;
  }

  fillRows() {
    this.topRow = this.list.slice(0, 5);
    this.bottomRow = this.list.slice(5);
  }

  rotateDevs() {
    const firstDevInBottomRow = this.bottomRow.shift() as Dev;
    const lastDevInTopRow = this.topRow.pop() as Dev;
    this.topRow.unshift(firstDevInBottomRow);
    this.bottomRow.push(lastDevInTopRow);
  }

  snapShotPairs() {
    this.bottomRow.forEach((dev, index) => {
      console.log(dev, this.topRow[index]);
      const pair = this.pairsService.addPair(dev, this.topRow[index]);
      const currentRound = this.roundsService.getCurrentRound();
      currentRound.addPair(pair);
    });
    console.log(this.roundsService.list);
  }

  automate() {
    for( let i = 0; i < this.list.length; i++) {
      this.roundsService.createNewRound();
      this.snapShotPairs();
      this.rotateDevs();
    }
  }

}
