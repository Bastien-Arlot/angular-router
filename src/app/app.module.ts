import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
