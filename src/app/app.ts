import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Events } from './events/events';
import { CounterApp } from './counter-app/counter-app';

@Component({
  selector: 'app-root',
  imports: [Login, Events, CounterApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
  name = 'Gayatri';
  age = 22;
  Branch = 'Computer Science';

  // Method
  access(){
    return 'What is Angular?';
  }

  // signal

  title1 = signal("This is angular app");


}


