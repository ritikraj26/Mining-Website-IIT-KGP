import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mining_Website';
  loadedTab = 'history';
  onNavigate(tab: string) {
    this.loadedTab=tab;
  }
}
