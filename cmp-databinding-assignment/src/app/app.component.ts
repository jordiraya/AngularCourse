import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onContIncreased(cont: number) {
    // console.log('cont: ' + cont);
    if (cont % 2 === 0) {
      this.evens.push(cont);
    } else {
      this.odds.push(cont);
    }
  }

}
