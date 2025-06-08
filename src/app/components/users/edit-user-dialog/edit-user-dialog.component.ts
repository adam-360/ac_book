import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserProfile } from 'src/app/models/profile';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent {
  user: UserProfile;
  constructor(@Inject(MAT_DIALOG_DATA) private _user: UserProfile,
    private dialogRef: MatDialogRef<EditUserDialogComponent>) { 
      this.user = Object.assign({}, _user);
  }

  save() {
    Object.assign(this._user, this.user);
    this.dialogRef.close();
  }
}
