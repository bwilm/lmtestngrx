import { NgClass, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnDestroy {

  counterDisplay: number = 0;

  private countSubscription: Subscription | null = null;

  ngOnInit():void {

    this.countSubscription = this.store.select('counter').subscribe((data) =>{
      this.counterDisplay = data.counter;
    })
  
  }

  constructor( private store: Store<{counter:{counter:number}}>){

  }

  ngOnDestroy() {
      if(this.countSubscription){
        this.countSubscription.unsubscribe();
      };
  }
}
