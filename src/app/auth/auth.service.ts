import { Injectable } from '@angular/core';
import Database, { IUser } from './Database';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private readonly _db = Database;
//   private _isUserAthenticated: boolean = false;
//   constructor() {}

//   getUserStatus(){
//     return this._isUserAthenticated
//   }

//   setUserToLogIn(){
//     this._isUserAthenticated = true
//   }

//   setUserToLogOut(){
//     this._isUserAthenticated = false
//   }

//   async register(user: Omit<IUser, 'id'>) {
//     return this._db.newUser(user).then((msg) => console.log(msg));
//   }

//   async fetchUsers() {
//     return this._db.getAllUsers();
//   }

//   async fetchUserByEmail(userEmail: string): Promise<IUser> {
//     return this._db.getUserByEmail(userEmail);
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _db = Database;
  private _isUserAuthenticated: boolean = false;
  private readonly localStorageKey: string = 'userData';
  private readonly logedInuserKey: string = 'logedInUser';

  logedInUser: IUser | undefined;
  constructor() {}

  wichUserIsLogedIn() {
    const dataString = localStorage.getItem(this.logedInuserKey);
    if (dataString !== null) {
      const logedIn = JSON.parse(dataString);
      this.logedInUser = logedIn;
      this._isUserAuthenticated = true;
    }
    return this.logedInUser;
  }

  getUserStatus() {
    const dataString = localStorage.getItem(this.logedInuserKey);

    if (dataString !== null) {
      this._isUserAuthenticated = true;
    }
    return this._isUserAuthenticated;
  }

  setUserToLogIn(user: IUser | undefined) {
    localStorage.setItem(this.logedInuserKey, JSON.stringify(user));
    this._isUserAuthenticated = true;
    this.logedInUser = user;
  }

  setUserToLogOut() {
    localStorage.removeItem(this.logedInuserKey);
    this._isUserAuthenticated = false;
  }

  checkLocalStorage() {
    const dataString = localStorage.getItem(this.localStorageKey);
    let data;
    if (dataString !== null) {
      data = JSON.parse(dataString);
      this._db.setUsers(data);
    } else {
      this._db.getAllUsers().then((users) => {
        data = JSON.stringify(users);
        localStorage.setItem(this.localStorageKey, data);
      });
    }
  }

  async register(user: Omit<IUser, 'id'>) {
    this._db.newUser(user);
    this._db.getAllUsers().then((users) => {
      let data = JSON.stringify(users);
      localStorage.setItem(this.localStorageKey, data);
    });
  }

  async fetchUsers() {
    return this._db.getAllUsers();
  }

  async fetchUserByEmail(userEmail: string): Promise<IUser> {
    return this._db.getUserByEmail(userEmail);
  }
}
