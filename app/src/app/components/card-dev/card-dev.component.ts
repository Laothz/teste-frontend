import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dev',
  templateUrl: './card-dev.component.html',
  styleUrls: ['./card-dev.component.scss']
})
export class CardDevComponent implements OnInit {

  @Input() devs: Object;

  constructor() {  }

  ngOnInit(): void {
    console.log(this.devs);
  }

}
