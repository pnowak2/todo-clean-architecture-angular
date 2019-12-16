import { Component } from '@angular/core';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo.presenter';

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
}
