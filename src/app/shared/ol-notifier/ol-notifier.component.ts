import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'ol-notifier',
  templateUrl: './ol-notifier.component.html',
  styleUrls: ['./ol-notifier.component.scss']
})
export class OlNotifierComponent implements OnInit {
  faTimes = faTimes;
  @Input() color: string;

  class = "notifier paper";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.setClasses()
    }, 1000)
  }

  setClasses(){
    this.class = `${this.class} ${this.color} open`
  }

  onClose(){
    this.class = `${this.class} ${this.color}`
  }

}
