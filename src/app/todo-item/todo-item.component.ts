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

  constructor() { }

  ngOnInit() {
  }

  onToggle(checked: boolean) {
    this.toggle.next(checked);
  }

}
