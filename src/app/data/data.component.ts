import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  userImageSource: string = '../../../assets/img/me.jpg'
  users: User[] = this.generateUsers()
  year: number = new Date().getFullYear()

  constructor() {}

  generateUsers() {
    let users: User[] = []

    for (let i = 0; i < 5; i++) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}` })
    }

    return users
  }
}
