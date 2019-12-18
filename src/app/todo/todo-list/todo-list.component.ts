import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: '[app-todo-list]',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @HostBinding('class.todo-list') cmpClass = true;

  constructor() { }

  ngOnInit() {
  }

}
