import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  instagramLogoSource: string =  'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
  userImageSource: string = '../../../assets/img/me.jpg'

  constructor() { }

  ngOnInit(): void {
  }
}
