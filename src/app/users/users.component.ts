import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    { id: 1, name: 'jean' },
    { id: 2, name: 'Julie' },
    { id: 3, name: 'Pierre' },
  ];
  constructor() {}

  ngOnInit() {}
}
