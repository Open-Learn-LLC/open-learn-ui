import { Component, OnInit } from '@angular/core';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  faEnvelope = faEnvelope;
  faTimes = faTimes;
  sizeOptions = ['Medium', 'Small', 'Large', 'Xtra-Large']
  colorOptions = ['Blue', 'Black', 'Teal', 'Brown']
  iconOptions = ['none', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
  sizeChosen = 'medium';  
  colorChosen = ''; 
  icon = 'none'
  code: string;
  constructor() { }

  ngOnInit(): void {
    this.setCode()
  }

  onIconChanged(e){
    this.icon = e.target.value;
    this.setCode()
  }

  onSizeChanged(e) {
    this.sizeChosen = e.target.value.toLowerCase();
    this.setCode();
  }

  onColorChanged(e) {
    this.colorChosen = e.target.value.toLowerCase();
    this.setCode();
  }

  setCode(){
    let iconHtml: string;
    
    if(this.icon != 'none'){
      iconHtml = `
       <fa-icon class="${this.icon}" size="2x" [icon]="faTimes"></fa-icon>         
    `
    } else {
      iconHtml = ``
    }
    
    this.code = `
        <app-general-card 
            size="${this.sizeChosen}" 
            color="${this.colorChosen}"
            title="Hello 123" 
            subtitle="Testing Subtitle"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teat cupidatat non proident, sunt in c."
            footer="testing 123">
            ${iconHtml}
        </app-general-card>
  `
  }

}
