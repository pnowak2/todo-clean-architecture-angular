import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/state/todos.state';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoVM;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleItem(checked: boolean) {
    this.toggle.next(checked);
  }

  onRemoveItem() {
    this.remove.next();
  }

}
