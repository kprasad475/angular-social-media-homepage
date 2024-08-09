import { Component } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrl: './post-image.component.css'
})
export class PostImageComponent {
  imageLink: string = this.generateImageLink()

  constructor() { }

  generateImageLink(): string {
    let width = Math.round(Math.random() * 600)
    let height = Math.round(Math.random() * 600)
    
    while (width < 500) {
      width = Math.round(Math.random() * 600)
    }

    while (height < 500) {
      height = Math.round(Math.random() * 600)
    }

    return `https://picsum.photos/${width}/${height}`
  }

  ngOnInit(): void {
  }
}
