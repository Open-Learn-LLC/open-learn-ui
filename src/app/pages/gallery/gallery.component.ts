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
  sizeChosen = 'medium'; 
  colorChosen = ''; 
  code = `
    <app-general-card 
        size="${this.sizeChosen}" 
        color="${this.colorChosen}"
        title="Hello 123" 
        subtitle="Testing Subtitle"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teat cupidatat non proident, sunt in c."
        footer="testing 123">
    </app-general-card>
  `
  constructor() { }

  ngOnInit(): void {
  }

  onColorChanged(e){
    this.colorChosen = e.target.value.toLowerCase()
    this.code = `
        <app-general-card 
            size="${this.sizeChosen}" 
            color="${this.colorChosen}"
            title="Hello 123" 
            subtitle="Testing Subtitle"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teat cupidatat non proident, sunt in c."
            footer="testing 123">
        </app-general-card>
  `
  }

  onSizeChanged(e) {
    this.sizeChosen = e.target.value.toLowerCase()
    this.code = `
        <app-general-card 
            size="${this.sizeChosen}" 
            color="${this.colorChosen}"
            title="Hello 123" 
            subtitle="Testing Subtitle"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teat cupidatat non proident, sunt in c."
            footer="testing 123">
        </app-general-card>
  `
  }

}
