import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  implements OnInit{
  @Input()
  username!: string

  @Input()
  userImageSource!: string

  constructor() { }

  ngOnInit(): void {
  }
}
