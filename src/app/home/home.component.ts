import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users: User[] = []

  constructor() {
    this.users = this.generateFakeData()
  }

  generateFakeData() {
    let quantityOfData = faker.datatype.number(50)
    let users: User[] = []

    let i = 0
    while (i < quantityOfData) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
      i++
    }

    users.push({
      username: 'renato3x',
      userImageSource: '../assets/img/me.jpg'
    })

    return users
  }

  ngOnInit(): void {
  }
}
