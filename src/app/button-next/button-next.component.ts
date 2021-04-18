import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-next',
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.css'],
})
export class ButtonNextComponent implements OnInit {
  constructor() {}

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  next() {
    this.newItemEvent.emit();
  }
}
