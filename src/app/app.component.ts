import { Component } from '@angular/core';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo.presenter';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/state/todos.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$ = this.todoPresenter.todos$;
  todosCount$ = this.todoPresenter.todosCount$;
  incompletedTodosCount$ = this.todoPresenter.incompletedTodosCount$;

  constructor(private todoPresenter: TodoPresenter) {
    this.todoPresenter.getAllTodos();
  }

  onAddItem(name: string) {
    this.todoPresenter.addTodo(name);
  }

  onItemCheck(todo: TodoVM, checked: boolean) {
    if (checked) {
      this.todoPresenter.markTodoAsCompleted(todo.id);
    } else {
      this.todoPresenter.markTodoAsIncompleted(todo.id);
    }
  }

  onShowAll() {
    this.todoPresenter.getAllTodos();
  }

  onShowCompleted() {
    this.todoPresenter.getCompletedTodos();
  }

  onShowIncompleted() {
    this.todoPresenter.getIncompletedTodos();
  }

  onRemoveCompleted() {
    this.todoPresenter.removeCompletedTodos();
  }

  onRemoveItem(todo: TodoVM) {
    this.todoPresenter.removeTodo(todo.id);
  }
}
