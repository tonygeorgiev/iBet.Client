import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {

  }
  isLoggedIn(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      return false;
    }
  }
  title = 'iBet-Client';
}
