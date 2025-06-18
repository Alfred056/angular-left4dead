import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  @HostListener('document:mousedown', ['$event'])
  onMouseDown() {
    document.body.style.cursor = 'url("assets/hacha_puntero2.png"), auto';
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    document.body.style.cursor = 'url("assets/hacha_puntero.png"), auto';
  }
}
