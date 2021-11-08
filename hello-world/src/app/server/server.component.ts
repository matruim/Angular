import { Component } from '@angular/core';

@Component({
	selector: 'app-server', //html component that will use this class
	templateUrl: 'server.component.html', //template that the will be swapped for the above selector
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverId: number = Math.floor(Math.random() * 100000) + 1;
  serverStatus: string = (Math.random() >= 0.5) ? "Online" : "Offline";
}
