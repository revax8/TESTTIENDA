import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTienda';
  userIsLoggedIn = false;

  handleLoginSuccess() {
    this.userIsLoggedIn = true;
  }
  isMenuOpen = false;

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }
}
