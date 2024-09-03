import { createReducer,on } from "@ngrx/store";
import { increment, reset, decrement} from './counter.actions';
import {initialState} from './counter.state'



export const countReducer = createReducer(

    initialState,
    on(increment, (state)=> {
        return{
            ...state,
            counter: state.counter + 1}
    }),
    on(decrement, (state)=> {
        return{
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset,(state)=>{
        return initialState
    })
     
  

)
