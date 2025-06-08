import { Component } from '@angular/core';
import { UserService } from '../../services/user';
import { UserProfile } from 'src/app/models/profile';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

// TODO: missing functionalities:
// - Add user
// - Edit user
// - Delete user
// - Search user
// - Pagination
// - Error handling

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class UsersComponent {
  private _users: UserProfile[] = [];
  public displayedColumns: string[] = ['username', 'email', 'firstName', 'lastName', 'actions'];
  filter = '';

  get users(): UserProfile[] {
    return this._users.filter((user) => {
        return user.username.toLowerCase().includes(this.filter) || 
        user.firstName.toLowerCase().includes(this.filter) ||
        user.lastName.toLowerCase().includes(this.filter);
    });
  }

  constructor(private usersService: UserService, public matDialog: MatDialog) {
    this.usersService.getUsers().subscribe({
      next: (users: UserProfile[]) => {
        this._users = users;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  public delete(email: string): void {
    // Add mat dialog to confirm delete
    const profileIndex = this._users.findIndex((user) => {
      return user.email === email;
    });

    if (profileIndex !== -1) {
      this._users.splice(profileIndex, 1);
      this._users = [...this._users];
    }
  }

  public edit(profile: UserProfile): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    const dialogRef = this.matDialog.open(EditUserDialogComponent, {
      data: profile,
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
