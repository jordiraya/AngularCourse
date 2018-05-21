import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '.app-server',
  templateUrl: './server.component.html',
  styles: [`
    .whiteText {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverID = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
