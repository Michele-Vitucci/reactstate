import { useState } from "react";

function Counter({initialValue=0}){

const [counter,setCounter]= useState(0)

    function handleCounterIncrement() {

        setCounter(counter +1)
        
    }

    function handleCounterDecrement() {
        setCounter(counter -1)
        
    }

    function handleCounterReset() {
        setCounter(initialValue)
        
    }
    return(
        <>
        <h2>the counter is : {counter}</h2>
          <button onClick={handleCounterIncrement}>Increment</button>
          <button onClick={handleCounterDecrement}>Decrement</button>
          <button onClick={handleCounterReset}>Reset</button>
        </>
      
    )

}

export default Counter