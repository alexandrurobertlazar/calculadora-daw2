import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-num-text',
  templateUrl: './num-text.component.html',
  styleUrls: ['./num-text.component.css']
})
export class NumTextComponent implements OnInit {
  @Input() operation: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
