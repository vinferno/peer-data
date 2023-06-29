import { Component, Input, OnInit } from '@angular/core';
import { Dev } from 'src/app/services/devs.service';

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss']
})
export class DevDetailComponent implements OnInit {
  @Input() dev!: Dev;
  constructor() { }

  ngOnInit(): void {
  }

}
