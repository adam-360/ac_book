import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/profile';
import { UserService } from 'src/app/services/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  currentUser: UserProfile | null = null;
  constructor(private userService: UserService) { 
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    })
  }
}
