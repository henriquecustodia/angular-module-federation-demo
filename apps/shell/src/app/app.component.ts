import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor (private router: Router) { }
 
  toDashboard() {
    this.router.navigate(['dashboard'], { queryParams: { name: 'henrique' } });
  }
}
