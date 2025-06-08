import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";

interface MenuItem {
  name: string;
  icon: string;
  link: string;
}

@Component({
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
  selector: 'app-menu',
  animations: [
    trigger('inOutAnimation', [ 
      state('open', style({
        width: '300px',
      })),
      state('closed', style({
        width: '80px',
      })),
      transition('* => closed', [
        animate('0.7s')
      ]),
      transition('* => open', [
        animate('0.7s')
      ]),]
    ),
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ],
})
export class MenuComponent {
  menuClosed = false;
  menuItemsHidden = false;
  currentPage = '';
  public menuItems: MenuItem[] = [
    { name: 'Home', icon: 'home', link: '/home' },
    { name: 'Users', icon: 'person', link: '/users' },
    { name: 'Book', icon: 'book', link: '/book' }
  ];

  toggleMenu(): void {
    this.menuClosed = !this.menuClosed;
    let timeout = 200;
    if(this.menuClosed) timeout = 0;
    setTimeout(() => {
      this.menuItemsHidden = this.menuClosed;
    }, timeout);
  }
}