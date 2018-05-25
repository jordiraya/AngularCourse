import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() contIncreased = new EventEmitter<number>();
  cont = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.emitter();
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

  emitter() {
    this.contIncreased.emit(this.cont ++);
  }

}
