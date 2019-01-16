import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, severContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, severContent: string}>();
  
  newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputName: HTMLInputElement) {
    this.serverCreated.emit({      
      serverName: inputName.value,
      severContent: this.newServerContent
    })
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: inputName.value,
      severContent: this.newServerContent
    })
  }
}
