import { Injectable } from '@angular/core';
import { ITodo, IUser, ISubTodo } from '../auth/Database';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly localStorageKey = 'userData';
  activeUser: IUser | undefined;
  activeUserTodos : ITodo[] | undefined ;
  
  constructor(
    private authService: AuthService
  ) { }


  getActiveUser(user:IUser | undefined){
    this.activeUser = user
    this.activeUserTodos = this.activeUser?.todos
  }


  whoIsActive(){
    return this.activeUser
  }

  getActiveUserTodos(){
    return this.activeUserTodos
  }

 
  addNewTodo(newTodoText: string): void{
    if (this.activeUserTodos !== undefined) {
      
      const newTodo: ITodo = {
        id : this.activeUserTodos.length + 1,
        text: newTodoText,
        isCompleted: false,
        isImportant: false,
        subTodos: []
      }

      this.activeUserTodos.push(newTodo)
    }

    this.updateLocalStorage()

  }

  removeTodo(id: number){
    const itemIndex: number | undefined = this.activeUserTodos?.findIndex(todo => todo.id === id)

    if(itemIndex !== undefined){

      this.activeUserTodos?.splice(itemIndex,1)
    }
    this.updateLocalStorage()
  }

  setTodoToComplete(todo: ITodo){
    

    if(todo){
      todo.isCompleted = true;
    
    }

    this.updateLocalStorage()
  }

  setTodoToImportant(todo: ITodo){
    
    if(todo){
      todo.isImportant = true;
    }

    this.updateLocalStorage()
  }
  getCompletedTodos(){
    return this.activeUserTodos?.filter(todo => todo.isCompleted === true)
  }

  getImportantTodos(){
    return this.activeUserTodos?.filter(todo => todo.isImportant ===true)
  }

  updateLocalStorage(){
    const dataString = localStorage.getItem(this.localStorageKey)
    const activeUserId = this.activeUser?.id
    let existData: IUser[];
    if ( dataString !== null){
      existData = JSON.parse(dataString)

      const cleanedData: IUser[] = existData.filter(users => users.id !== activeUserId)
      
        if( this.activeUser !== undefined){

          cleanedData.push(this.activeUser)
        }
      
      localStorage.setItem(this.localStorageKey, JSON.stringify(cleanedData))

    }

    this.authService.setUserToLogIn(this.activeUser)
  }
  
  undoCompletedTodo(todo: ITodo){

    if(todo){
      todo.isCompleted = false;
    }

    this.updateLocalStorage()
  }

  undoImportantTodo(todo: ITodo){
    
    if(todo){
      todo.isImportant = false;
    }

    this.updateLocalStorage()
  }

  changeTodoText(todo: ITodo, newText: string){
    if(todo){
      todo.text = newText 
    }
    this.updateLocalStorage()
  }

  addNewSubTask(subTodoText: string, todo: ITodo | undefined){
    if (todo !== undefined) {
      const newStep: ISubTodo = {
        id: todo.subTodos.length +1,
        isCompleted: false,
        text: subTodoText
      }
      todo.subTodos.push(newStep)
    }
    this.updateLocalStorage()
  }

  setSubTodoComplete(subTodo: ISubTodo){
    if (subTodo) {
      subTodo.isCompleted = true
    }

    this.updateLocalStorage()
  }

  undoSubTodoComplete(subTodo: ISubTodo){

    if (subTodo) {
      subTodo.isCompleted = false
    }

    this.updateLocalStorage()
  }

  removeSubTodo(subtodo: ISubTodo, todo: ITodo | undefined){
    if (todo !== undefined) {
      const index = todo.subTodos.indexOf(subtodo)
      todo.subTodos.splice(index, 1)
    }

    this.updateLocalStorage()
  }

  
}
