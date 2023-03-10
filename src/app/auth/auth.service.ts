import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginForm, registerForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean=false;
  isLoading:boolean=false;
  
  login(form:loginForm){

    if(this.isLoading)return;
    this.isLoading=true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth,form.email, form.password)
      .then((userCredential) => {
       this.isAuthenticated=true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
      })
      .finally(()=>(this.isLoading=false));
  }


  passwordMatched :boolean=true;
  register(form:registerForm){

    if(this.isLoading) return;
    this.isLoading=true;
 
 
     if(form.password !=form.confirm_pass){
        this.passwordMatched=false;
        return
     }
 
     const auth = getAuth();
     createUserWithEmailAndPassword(auth, form.email, form.password)
       .then((userCredential) => {
        this.isAuthenticated=true;
    
        
       })
       .catch((error) => {
        this.isAuthenticated=false;
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
       }).finally(()=> this.isLoading=false);
   }


  }
 

