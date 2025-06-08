import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users';
import { MenuComponent } from './components/menu/menu';
import { BookFlightComponent } from './components/book-flight/book-flight';
import { UserService } from './services/user';
import { FlightService } from './services/flight';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { BookFlightDialogComponent } from './components/book-flight/book-flight-dialog/book-flight-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { EditUserDialogComponent } from './components/users/edit-user-dialog/edit-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    BookFlightComponent,
    NavComponent,
    BookFlightDialogComponent,
    HomeComponent,
    EditUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [
    UserService,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
