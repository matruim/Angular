import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //this can be any css selector class, attribute, or element
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `, //only use if you have a tiny amount of html code other wise use the templateUrl
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverName = "";
  serverCreated = false;
  servers = ['Testserver','Testserver2']
  constructor() { }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.servers.push(this.serverName)
    this.serverCreated = true;
  }
  onUpdateServerName(e:Event){
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
