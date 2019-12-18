import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  @Input() leftCount: number;
  @Output() all = new EventEmitter();
  @Output() active = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() clearCompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onShowAll() {
    this.all.next();
  }

  onShowActive() {
    this.active.next();
  }

  onShowCompleted() {
    this.completed.next();
  }

  onClearCompleted() {
    this.clearCompleted.next();
  }
}
