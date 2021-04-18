import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-prev',
  templateUrl: './button-prev.component.html',
  styleUrls: ['./button-prev.component.css'],
})
export class ButtonPrevComponent implements OnInit {
  constructor() {}
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(): void {}

  prev() {
    this.newItemEvent.emit();
  }
}
