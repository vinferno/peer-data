import { Component, Input, OnInit } from '@angular/core';
import { Round } from 'src/app/services/rounds.service';

@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.component.html',
  styleUrls: ['./round-detail.component.scss']
})
export class RoundDetailComponent implements OnInit {
  @Input() public round!: Round;

  constructor() { }

  ngOnInit(): void {
  }

  

}
