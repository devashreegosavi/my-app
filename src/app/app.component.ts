import { Component } from '@angular/core';
import { AuthService } from './services/guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(private authservice : AuthService){

  }
  onLoginClick(){
    this.authservice.login();
  }

  onLogoutClick(){
    this.authservice.logout();
  }
}
