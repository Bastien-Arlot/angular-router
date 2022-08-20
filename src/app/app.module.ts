import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [AppComponent, HomepageComponent, UsersComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
