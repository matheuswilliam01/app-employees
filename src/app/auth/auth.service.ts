import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private fireauth: AngularFireAuth;

  constructor(fireauth: AngularFireAuth) { 
    this.fireauth = fireauth;
  }
  public login(email: string, senha: string): Promise<any> {
    return this.fireauth.signInWithEmailAndPassword(email, senha);
  }

  public loginWithGoogle(): Promise<any> {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider())
  }

  public register(email: string, senha: string): Promise<any> {
    return this.fireauth.createUserWithEmailAndPassword(email, senha);
  }

  public logout(): Promise<any> {
    return this.fireauth.signOut();
  }

  public isAuthenticated(): boolean {
    let token: string | null = localStorage.getItem("token");
    if(token === null) {
      return false;
    }else if(token === "true"){
      return true;
    }else{
      return false;
    }
  }
}
