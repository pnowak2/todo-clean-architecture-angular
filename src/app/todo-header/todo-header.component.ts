import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  @Output() addItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(name: string) {
    this.addItem.next(name);
  }

}
