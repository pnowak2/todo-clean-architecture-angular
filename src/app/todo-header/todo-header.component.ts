import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  name: string;
  @Output() addItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.addItem.next(this.name);
    this.name = '';
  }

}
