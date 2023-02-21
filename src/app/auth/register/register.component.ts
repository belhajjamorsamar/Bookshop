import { Component } from '@angular/core';
import { registerForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  form :registerForm = {
    email:'',
    password:'',
    confirm_pass:'',
  };


isLoading: boolean=false;
constructor(private authService:AuthService ){}
  submit(){
 this.authService.register(this.form)}}
