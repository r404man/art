import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;
  constructor() { }

  auth(username: string, password: string) {
    if (username === 'root' && password === 'root') {
      return true
    } else {
      return false
    }
  }
}
