import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'testName', type: 'server', content: 'testContent'}];

  onServerAdded(serverData: {serverName: string, severContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.severContent
    });
  }

  onBlueprintAdded(blueData: {serverName: string, severContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueData.serverName,
      content: blueData.severContent
    });
  }
}
