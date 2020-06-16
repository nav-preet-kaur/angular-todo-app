import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';
import { of } from 'rxjs';
import {single} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  constructor() {
    this.todos = [{
      id: '111',
      title: 'Learn CSS',
      isComplete: true,
      date: new Date()
    }, {
      id: '222',
      title: 'Learn Java',
      isComplete: true,
      date: new Date()
    }, {
      id: '333',
      title: 'Learn C++',
      isComplete: true,
      date: new Date()
    }
    ];

    }
  getTodos(){
    return of(this.todos);
  }

  addTodo(todo: Todo)
  {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo)
  {
    this.todos.map((singleTodo: Todo) => {
      if (singleTodo.id === todo.id){
        singleTodo.isComplete = !todo.isComplete;
      }
  });
  }

  deleteTodo(todo: Todo){
    const indexOfTodo = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodo, 1);
  }
}
