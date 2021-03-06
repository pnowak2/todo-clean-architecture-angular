import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TodoInMemoryRepository
} from '@domisoft/todo-clean-architecture/lib/features/todo/data/repository/inmemory/todo.inmemory.repository';
import { TodoRepository } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/repository/todo.repository';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddTodoUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/add-todo.usecase';
import { GetAllTodosUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/get-all-todos.usecase';
import { GetCompletedTodosUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/get-completed-todos.usecase';
import { GetIncompletedTodosUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/get-incompleted-todos.usecase';
import { MarkTodoAsCompletedUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/mark-todo-as-complete.usecase';
import { MarkTodoAsIncompletedUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/mark-todo-as-incomplete.usecase';
import { RemoveCompletedTodosUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/remove-completed-todos.usecas';
import { RemoveTodoUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/remove-todo-id.usecase';
import { TodoVM } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/state/todos.state';
import { TodoDefaultPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo-default.presenter';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo.presenter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: TodoRepository,
      useFactory: () => {
        return new TodoInMemoryRepository();
      }
    },
    {
      provide: AddTodoUseCase,
      useFactory: (repo) => {
        return new AddTodoUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: GetAllTodosUseCase,
      useFactory: (repo) => {
        return new GetAllTodosUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: GetCompletedTodosUseCase,
      useFactory: (repo) => {
        return new GetCompletedTodosUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: GetIncompletedTodosUseCase,
      useFactory: (repo) => {
        return new GetIncompletedTodosUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: MarkTodoAsCompletedUseCase,
      useFactory: (repo) => {
        return new MarkTodoAsCompletedUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: MarkTodoAsIncompletedUseCase,
      useFactory: (repo) => {
        return new MarkTodoAsIncompletedUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: RemoveTodoUseCase,
      useFactory: (repo) => {
        return new RemoveTodoUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: RemoveCompletedTodosUseCase,
      useFactory: (repo) => {
        return new RemoveCompletedTodosUseCase(repo);
      },
      deps: [TodoRepository]
    },
    {
      provide: TodoPresenter,
      useFactory: (a, b, c, d, e, f, g, h) => {
        return new TodoDefaultPresenter(a, b, c, d, e, f, g, h);
      },
      deps: [
        GetAllTodosUseCase,
        GetCompletedTodosUseCase,
        GetIncompletedTodosUseCase,
        AddTodoUseCase,
        MarkTodoAsCompletedUseCase,
        MarkTodoAsIncompletedUseCase,
        RemoveTodoUseCase,
        RemoveCompletedTodosUseCase,
      ]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
