import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
    TodoInMemoryRepository
} from '@domisoft/todo-clean-architecture/lib/features/todo/data/repository/inmemory/todo.inmemory.repository';
import { TodoRepository } from '@domisoft/todo-clean-architecture/lib/features/todo/domain/repository/todo.repository';
import { TodoDefaultPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/presenter/todo-default.presenter';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoPresenter } from '@domisoft/todo-clean-architecture/lib/features/todo/presentation/presenter/todo.presenter';

@NgModule({
    declarations: [
        TodoComponent,
        TodosComponent,
        TodoItemComponent,
        TodoHeaderComponent,
        TodoFooterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    exports: [
        TodoComponent,
        TodosComponent,
        TodoItemComponent,
        TodoHeaderComponent,
        TodoFooterComponent,
    ],
    providers: [
        {
            provide: TodoRepository,
            useFactory: () => {
                return new TodoInMemoryRepository([
                    { id: '1', title: 'test', completed: false }
                ]);
            }
        },
        {
            provide: TodoPresenter,
            useFactory: (repo: TodoRepository) => {
                return new TodoDefaultPresenter(repo);
            },
            deps: [TodoRepository]
        },
    ]
})
export class TodoModule { }
