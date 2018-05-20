import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .colorWhite { color : white; }
  `]
})
export class AppComponent {
  showParagraph = false;
  cont = 0;
  logs = [];

  toggleShowParagraph() {
    this.showParagraph === true ? this.showParagraph = false : this.showParagraph = true;
    this.cont ++;
    this.logs.push('toggled ' + this.cont);
  }

  getBackgroundColor() {
    if (this.cont <= 5) {
      return 'white';
    }
    return 'blue';
  }
}
