import { Component } from '@angular/core';
import {ServerElementComponent} from "./server-element/server-element.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Testserver',content:'just a test'}];

  onServerAdded(serverData: {name:string, content: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.name,
        content: serverData.content
      });
  }
  //
  onBlueprintAdded(blueprintData: {name:string, content: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.name,
        content: blueprintData.content
      });
  }
}
