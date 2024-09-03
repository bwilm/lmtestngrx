import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from "./counterbutton/counterbutton.component";
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterbuttonComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'counter';

  // constructor( private store: Store<[]>){



  // }


  ngOnInit():void {

  }

  // getCount(){

  //   this.store.selector('count');

  // }

  // onIncrement(){
  //   this.store.dispatch('Increment Count')
  // }

  // onDecrement(){
  //   this.store.dispatch('Decrement Count')
  // }
}
