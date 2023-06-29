import { Component } from '@angular/core';
import { BaseService } from './services/base.service';
import { DevsService } from './services/devs.service';
import { RoundsService } from './services/rounds.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peer-data';

  constructor(
    private devsService: DevsService,
    private roundsService: RoundsService,
    ) {
    this.devsService.createAllDevs();
    console.log(this.devsService);
    console.log(this.roundsService);
    console.log(this.devsService.list);
  }
}
