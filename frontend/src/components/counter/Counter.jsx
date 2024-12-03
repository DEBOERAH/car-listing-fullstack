import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



const counter = () => {

    const styles={
        button: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            backgroundColor: 'green'
        },

        h2: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            color: 'red'
        }

    }

    //create state instance from the data you want to manipulate
    // const [getter,setter] = useState(initialValue)

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1);
    }
// handle decrement
    const decrement = () => {
        setCounter(counter - 1);
    }
    // handle reset
    const reset = () => {
        setCounter(0);
    }

    //side effect operation
    const callAlert = () => {
        // alert('hello world');
    }
    // a funct ion that alerts hello world from use effect


    useEffect(() => {
        callAlert();
    },[ counter])


  return (
    <div>
        <h2 style={styles.h2}>counter : {counter}</h2>

        <div>
            <button style={styles.button} onClick={increment}>increment</button>
            <button style={styles.button} onClick={decrement}>decrement</button>
            <button  style={styles.button} onClick={reset}>Reset</button>
        </div>

    </div>


  )
}

export default counter