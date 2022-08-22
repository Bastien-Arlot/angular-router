import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  public redirection(user: User): void {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        name: user.name,
      },
      queryParamsHandling: 'merge',
    });
  }
}
