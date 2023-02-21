import { Component } from '@angular/core';
import { loginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


form :loginForm = {
  email:'',
  password:'',
};

constructor(private authservice:AuthService){}

submit(){
this.authservice.login(this.form)
 
}
isLoading(){
  return this.authservice.isLoading;
}
}
