import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  //receiving
  @Input() card: any;

  ngOnInit(): void {
    console.log(this.card);
  }
}
