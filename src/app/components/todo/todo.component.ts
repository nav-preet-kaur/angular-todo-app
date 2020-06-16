import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {TodoService} from '../../service/todo.service';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }
    faTrashAlt =  faTrashAlt;

    todos: Todo[];
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(response => {
      this.todos = response;
    });
  }

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo);
  }

  changeStatus(todo: Todo)
  {
    this.todoService.changeStatus(todo);
  }

}
