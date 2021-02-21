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
  sizeChosen = 'medium';  

  colorOptions = ['Default(white)', 'Blue', 'Black', 'Teal', 'Brown']
  colorChosen = ''; 

  iconOptions = ['none', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
  icon = 'none'

  dottedOptions = ['none', 'footer-before', 'footer-after', 'title-before', 'title-after']
  dottedClass ='none'
  
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

  onDottedChanged(e){
    this.dottedClass = e.target.value.toLowerCase();

    console.log(this.dottedClass)
    this.setCode();
  }

  onSelect(selection: string){
    this.colorChosen = selection.toLowerCase();
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

    let dottedHtml: string;

    if (this.dottedClass != 'none') {
      dottedHtml = `
            <div [class]="${this.dottedClass}">
                <dotted-divider></dotted-divider>    
            </div>
            `
    } else {
      dottedHtml = ``
    }
    
    this.code = `
        <ol-general-card 
            size="${this.sizeChosen}" 
            color="${this.colorChosen}"
            title="Hello 123" 
            subtitle="Testing Subtitle"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teat cupidatat non proident, sunt in c."
            footer="Testing 123">
            ${dottedHtml}
            ${iconHtml}
        </ol-general-card>
  `
  }

}
