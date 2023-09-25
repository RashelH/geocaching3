import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider, Auth } from 'firebase/auth'; 

@Injectable()
export class AuthService {

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  async loginWithFacebook(){
    try {
      const provider = new FacebookAuthProvider(); 
      const result = await this.afAuth.signInWithPopup(provider);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
