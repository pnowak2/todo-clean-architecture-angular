import { Component } from '@angular/core';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo.presenter';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/state/todos.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$ = this.todoApp.todos$;
  todosCount$ = this.todoApp.todosCount$;
  incompletedTodosCount$ = this.todoApp.incompletedTodosCount$;

  constructor(private todoApp: TodoPresenter) {
    this.todoApp.getAllTodos();
  }

  onAddItem(name: string) {
    this.todoApp.addTodo(name);
  }

  onCheckItem(todo: TodoVM) {
      this.todoApp.markTodoAsCompleted(todo.id);
  }

  onUncheckItem(todo: TodoVM) {
      this.todoApp.markTodoAsIncompleted(todo.id);
  }

  onShowAll() {
    this.todoApp.getAllTodos();
  }

  onShowActive() {
    this.todoApp.getIncompletedTodos();
  }

  onShowCompleted() {
    this.todoApp.getCompletedTodos();
  }

  onClearCompleted() {
    this.todoApp.removeCompletedTodos();
  }

  onRemoveItem(todo: TodoVM) {
    this.todoApp.removeTodo(todo.id);
  }
}
