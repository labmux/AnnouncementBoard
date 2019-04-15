import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: number;

  constructor() { }

  setUser(user: number): void {
      this.user = user;
  }

  getUser(): number {
      return this.user;
  }
}
