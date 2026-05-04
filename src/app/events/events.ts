import { Component, signal, StreamingResourceOptions } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  // Event Binding
  count = 0;

  increment(){
    this.count++;
  }

  // Event Object
  ShowEvent(event: any){
    console.log(event);
  }

  // Example 2

  username = '';
  updateUser(value: string){
    this.username = value;
  }

  // Event with Signals

  count1 = signal(0);
  increment1(){
    this.count1.update(count => count + 1);
  }

  // Form Submission

  onSubmit(e: any){
    e.preventDefault();
    console.log("Form Submitted");

  }

  // Events Types
  // 1. click Event

  handleOnclick(){
    console.log("Button Clicked");
  }

  // 2. Input Event

  OnTyping(e:any){
    console.log("Typed...", e.target.value);
  }

  // 3. Keyup Event

  OnKeyUp(e: any){
    console.log("Key pressed", e.key)

  }

  // 4. Mouseover Event

  OnMouseOver(){
    console.log("Mouse Hovered");
  }
  OnLeave(){
    console.log("Mouse Left");
  }

  // 5. Focus and Blur Events
  onBlur(){
    console.log("Input Lost Focus");
  }

  onFocus(){
    console.log("Input Focused");
  }

  // Get value using Template Reference Variable

  email: string = "";

  getEmail(value: string){
    this.email = value;
  }
}


