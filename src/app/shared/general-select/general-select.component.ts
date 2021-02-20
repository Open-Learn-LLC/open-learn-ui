import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-select',
  templateUrl: './general-select.component.html',
  styleUrls: ['./general-select.component.scss']
})
export class GeneralSelectComponent implements OnInit {
  @Input() options: Array<string>;
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
