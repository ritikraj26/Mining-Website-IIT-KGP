import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor() {}

  navbarScrolled = false;

  ngOnInit(): void {
    fromEvent(window, 'scroll').subscribe(() => {
      if (window.scrollY > 0) {
        this.navbarScrolled = true;
      } else {
        this.navbarScrolled = false;
      }
    });
  }
}
