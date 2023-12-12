export interface ISubTodo{
    id: number,
    isCompleted: boolean,
    text: string
}

export interface ITodo{
    id: number,
    text: string,
    isCompleted: boolean,
    isImportant: boolean,
    createdAt: string[],
    subTodos: ISubTodo[]
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    todos: ITodo[]
}


// export interface IDatabase {
//     users: IUser[]
// }

class Database { 

    private users: IUser[] = []

 
    async setUsers(data: IUser[]){
        this.users = data
    }

    async newUser(data: Omit<IUser , 'id'>): Promise<string>{
        const min = 100000
        const max = 999999
        const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        this.users.push({
            id: randomId,
            ...data,
            todos : []
        })

        return `User registered with id : ${randomId}`

    }

   async getAllUsers(): Promise<IUser[]>{
        return this.users
    }

   async getUserByEmail (email: string): Promise<IUser>{

    const user = this.users.find(u => u.email === email)

    if(!user){
        throw new Error('User Not Found !')
    }

    return user

   }
}


export default new Database();
