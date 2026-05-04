import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  counter: number = 0;
  

  // // Begineers

  // increment(){ 
  //   this.counter++;
  // }

  // decrement(){
  //   if(this.counter > 0){
  //     this.counter--;
  //   }
  // }

  // reset(){
  //   this.counter = 0;
  // }


  // Pro

  handleApp(value: string){
    if(value === "add")
      this.counter++;
    else if(value === "subtract" && this.counter > 0)
      this.counter--;
    else if(value === "reset")
      this.counter = 0;
    else
      console.log("Invalid Operation");

  }


}
