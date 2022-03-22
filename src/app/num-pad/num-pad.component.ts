import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-num-pad',
  templateUrl: './num-pad.component.html',
  styleUrls: ['./num-pad.component.css']
})
export class NumPadComponent implements OnInit {
  @Output() numberClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(char: string) {
    this.numberClicked.emit(char)
  }

}
