import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginpage = "Login Here";

  // property Binding 
  name = "property binding Example";
  imageUrl = "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=";

  isEnabled = false;

  // Class and Style Binding
  isActive = true;

  boxwidth = 100;
  bgcolor = "red";

  // Signal Binding
  count = signal(0);



}
