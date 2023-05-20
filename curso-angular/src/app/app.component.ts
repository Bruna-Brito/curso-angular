import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   userName = 'Ana';
   userData = {
    email: 'ana@email.com',
    role: 'Admin',
   }

  title = 'curso-angular';
}
