import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error login: ", error)
    }
  }

  async logOut() {
    try {
      await this.afAuth.signOut();
    } catch(error) {
      console.log("Error loggin out: ", error)
    }
  }

  geCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
