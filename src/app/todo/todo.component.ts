import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
   todosArr: Array<Itodo> = [
    {
      todoItem:'Js',
      todoId:'123'
   },
   {
      todoItem:'Ts',
      todoId:'124'
   },
   {
      todoItem:'DS',
      todoId:'125'
   }
  ]
  isInEditMode : boolean = false;
  editId !: string
  @ViewChild('todoItem') todoItem !: ElementRef

  constructor() { }

  ngOnInit(): void {}

  onTodoAdd(){
    //get Todo obj
    let todoobj : Itodo ={
      todoItem : this.todoItem.nativeElement.value,
      todoId : Date.now().toString()
    }
    this.todoItem.nativeElement.value =''
    //push arr
    this.todosArr.push(todoobj)

    //create a new li

  }

 trackById(index: number,todo : Itodo){
  return todo.todoId
 } 

 removeTodo(id : string){

  let getIndex = this.todosArr.findIndex(t=> t.todoId===id)
  this.todosArr.splice(getIndex,1)
 }
 
  onEdit(todo : Itodo){
    console.log(todo);
    this.editId = todo.todoId
    this.todoItem.nativeElement.value = todo.todoItem;
    this.isInEditMode = true;
  }

  onUpdate(){
    //UPDATE TODO
    let UPDATED_TODO : Itodo ={
      todoItem : this.todoItem.nativeElement.value,
      todoId : this.editId
    }
    console.log(UPDATED_TODO);
    
    this.todoItem.nativeElement.value =''
    //ARRAY me replace

    let getIndex = this.todosArr.findIndex(t => t.todoId===UPDATED_TODO.todoId)
    this.todosArr[getIndex] =UPDATED_TODO
    this.isInEditMode = false
  }

}


//zone.js >> changeDetection.default
//zone.js >> changeDetection.onpush