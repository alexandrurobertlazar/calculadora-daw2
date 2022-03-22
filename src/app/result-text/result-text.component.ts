import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-text',
  templateUrl: './result-text.component.html',
  styleUrls: ['./result-text.component.css']
})
export class ResultTextComponent implements OnInit {
  @Input() result: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
