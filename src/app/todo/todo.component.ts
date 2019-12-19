
import { Component, OnInit } from '@angular/core';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/viewmodel/todos.viewmodel';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/presenter/todo.presenter';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todos$ = this.todoApp.todos$;
  activeTodosCount$ = this.todoApp.activeTodosCount$;
  filter$ = this.todoApp.filter$;

  constructor(private todoApp: TodoPresenter, private route: ActivatedRoute) {
    route.fragment.subscribe(p => {
      if (p.includes('active')) {
        this.todoApp.getActiveTodos();
      } else if (p.includes('completed')) {
        this.todoApp.getCompletedTodos();
      } else {
        this.todoApp.getAllTodos();
      }
    });
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
    this.todoApp.markTodoAsActive(todo.id);
  }

  onShowAll() {
    this.todoApp.getAllTodos();
  }

  onShowActive() {
    this.todoApp.getActiveTodos();
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

  onToggleAllActive() {
    this.todoApp.markAllTodosAsActive();
  }
}
