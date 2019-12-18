import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  TodoInMemoryRepository
} from '@domisoft/todo-clean-architecture/lib/features/todo/data/repository/inmemory/todo.inmemory.repository';
import { TodoRepository } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/repository/todo.repository';
import { AddTodoUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/add-todo.usecase';
import { GetAllTodosUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/get-all-todos.usecase';
import { GetCompletedTodosUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/get-completed-todos.usecase';
import {
  GetIncompletedTodosUseCase
} from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/get-incompleted-todos.usecase';
import {
  MarkTodoAsCompletedUseCase
} from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/mark-todo-as-complete.usecase';
import {
  MarkTodoAsIncompletedUseCase
} from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/mark-todo-as-incomplete.usecase';
import {
  RemoveCompletedTodosUseCase
} from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/remove-completed-todos.usecas';
import { RemoveTodoUseCase } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/usecase/remove-todo-id.usecase';
import { TodoDefaultPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo-default.presenter';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/todo.presenter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
