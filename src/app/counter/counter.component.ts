import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map} from 'rxjs';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  counterDisplay!: Observable<number>;



  ngOnInit():void {

    this.counterDisplay = this.store.select('counter').pipe(map((data)=> data.counter));
  
  }

  constructor( private store: Store<{counter:{counter:number}}>){

  }

  // ngOnDestroy() {
  //     if(this.countSubscription){
  //       this.countSubscription.unsubscribe();
  //     };
  // }
}
