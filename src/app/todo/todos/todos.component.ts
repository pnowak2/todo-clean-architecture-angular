import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/state/todos.state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Array<TodoVM>;
  @Output() checkItem = new EventEmitter<TodoVM>();
  @Output() uncheckItem = new EventEmitter<TodoVM>();
  @Output() removeItem = new EventEmitter<TodoVM>();

  constructor() { }

  ngOnInit() {
  }

  onCheckItem(todo: TodoVM, checked: boolean) {
    if (checked) {
      this.checkItem.next(todo);
    } else {
      this.uncheckItem.next(todo);
    }
  }

  onRemoveItem(todo: TodoVM) {
    this.removeItem.next(todo);
  }
}
