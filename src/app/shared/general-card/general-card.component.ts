import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ol-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.scss']
})
export class GeneralCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() body: string;
  @Input() footer: string;
  @Input() size: string;
  @Input() color: string;

  baseClass = 'paper card-padding inline '

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  renderClass(){
    return this.baseClass + this.renderSize() + this.renderColor()
  }

  renderSize(){
  switch (this.size) {
    case 'small': {
      return 'small '
    }
    case 'medium': {
      return 'medium '
    }
    case 'large': {
      return 'large '
    }
    case 'xtra-large': {
      return 'xtra-large '
    }
    default: {
      return 'medium '
    }
  }
}

  renderColor(){
      switch (this.color) {
        case 'black': {
          return 'black'
        }
        case 'blue': {
          return 'blue'
        }
        case 'teal': {
          return 'teal'
        }
        case 'brown': {
          return 'brown'
        }
        default: {
          return ''
        }
     }
    }
  }