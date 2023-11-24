import { Injectable } from '@angular/core';
import { ITodo, IUser } from '../auth/Database';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly localStorageKey = 'userData';
  activeUser: IUser | undefined;
  activeUserTodos : ITodo[] | undefined ;
  
  constructor() { }


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
        isImportant: false
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

  setTodoToComplete(id: number){
    const selectedTodo = this.activeUserTodos?.find(todo => todo.id === id)

    if(selectedTodo){
      selectedTodo.isCompleted = true;
    
    }

    this.updateLocalStorage()
  }

  setTodoToImportant(id: number){
    const selectedTodo = this.activeUserTodos?.find(todo => todo.id === id)

    if(selectedTodo){
      selectedTodo.isImportant = true;
    
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
    const activeUseId = this.activeUser?.id
    let existData: IUser[];
    if ( dataString !== null){
      existData = JSON.parse(dataString)

      const cleanedData: IUser[] = existData.filter(users => users.id !== activeUseId)
      
        if( this.activeUser !== undefined){

          cleanedData.push(this.activeUser)
        }
      
      localStorage.setItem(this.localStorageKey, JSON.stringify(cleanedData))

    }
  }

}
