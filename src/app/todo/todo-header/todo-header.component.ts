import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  name: string;
  isToggleAll: boolean;

  @Output() addItem = new EventEmitter<string>();
  @Output() toggleAllCompleted = new EventEmitter();
  @Output() toggleAllIncompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.addItem.next(this.name);
    this.name = '';
  }

  onToggleAllChange() {
    if (this.isToggleAll) {
      this.toggleAllCompleted.next();
    } else {
      this.toggleAllIncompleted.next();
    }
  }
}
