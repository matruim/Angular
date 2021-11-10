import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name:string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, content: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(nameInput: HTMLInputElement, contentInput: HTMLInputElement, type: string){
    if(type == "server") this.serverCreated.emit({name: nameInput.value, content: contentInput.value})
    else this.blueprintCreated.emit({name: nameInput.value, content: contentInput.value})
  }
}
