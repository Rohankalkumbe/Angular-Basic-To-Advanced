import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, StreamingResourceOptions } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
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

  // @IF-Else in Angular

  age: number = 0;

  updateAge(value: string){
    this.age = Number(value);
  }

  // Toggle Display Hide-show

  isVisible = true;

  toggleVisibility(){
    this.isVisible = !this.isVisible;
  }

  // @Switch-Case in Angular
  section = "Home";

  color = "red";

  Categories = "";

  updateCategories(value: string){
    this.Categories = value.toLowerCase();
  }

  // @For Loop in Angular

  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  removeItem(i: number){
    this.items.splice(i, 1);

  }

  // For Loop Contextual Variables

  numbers = [1,2,3,4,5];
  
// Data Types with signals and SET, UPDATE methods

  values = signal<number[]>([1,20, 50, 100])
  // SET

  setValues(){
    this.values.set([20,30,40, 50, 60]);
  }

  // UPDATE
  updateValues(){
    this.values.update(arr => [...arr,70,80,90,100])
  }

  // Effects with Signals

  isDarkMode = signal(false);

  constructor(){
    effect(() =>{
      if(this.isDarkMode()){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    });
  }

  toggleBtn(){
    this.isDarkMode.update(mode => !mode);
  }

  // Pipes in Angular

  // Built-in Pipes

  name: string = "Rohan";
  uName: string = "Gayatri";

  // Date Pipe

  today: Date = new Date();

  // Currency Pipe

  amount: number = 125000;

  // Percent pipe

  per = 0.75;

  // Json pipe

  Person = {
    name: "Rohan",
    age: 23,
    number: 9049045218,
    City: "Mangalwedha"

  }

  // Signal Graph

  count2 = signal(1);

  doubleCount = computed<number>(() => this.count2() * 2);

  constructor2(){
    effect(()=>{
      console.log("Double Count:", this.doubleCount());
    })
  }

  incre(){
    this.count2.update(count => count + 1);
  }

  // Example two

  count3 = signal(1);

  price = signal(1);

  total = computed(()=> this.count3() * this.price());

  constructor3(){
    effect(()=>{
      console.log("Total Price:", this.total());
    })
  }

  updateCount(){
    this.count3.update(count => count + 1);
  }

  updatePrice(){
    this.price.update(price => price + 1);
  }
}


