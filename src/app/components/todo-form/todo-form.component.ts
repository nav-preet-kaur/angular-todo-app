import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import {TodoService} from '../../service/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService: TodoService) { }

    todoTitle : string = '';


  ngOnInit(): void {
  }

  handleTodo()
  {
    const todo: Todo = {
      id: '234',
      title : this.todoTitle,
      isComplete: true,
      date: new Date()
    }

    this.todoService.addTodo(todo);
  }

}
