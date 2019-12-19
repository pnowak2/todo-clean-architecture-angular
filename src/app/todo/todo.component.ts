
import { Component, OnInit } from '@angular/core';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/viewmodel/todos.viewmodel';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/presenter/todo.presenter';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todos$ = this.todoApp.todos$;
  incompletedTodosCount$ = this.todoApp.incompletedTodosCount$;
  filter$ = this.todoApp.filter$;

  constructor(private todoApp: TodoPresenter) {
    this.todoApp.getAllTodos();
  }

  ngOnInit() {
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

  onToggleAllCompleted() {
    this.todoApp.markAllTodosAsCompleted();
  }

  onToggleAllIncompleted() {
    this.todoApp.markAllTodosAsIncompleted();
  }
}
