import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
    const [count, setcount] = useState(0)
    function Increase() {
        setcount(count + 1)
    }
    function Decrease() {
        if (count > 0) {
            setcount(count - 1)
        }
        else {
            setcount(0)
            alert("You cannot decrease below the zero")
        }

    }

    return (

        <> <h4>WelCome to Counter Program</h4>
            <div className='container'>
                <h1>{count}</h1>
                <div>
                    <button onClick={Increase}>Increase</button>
                    <button onClick={Decrease}>Decrease</button>
                </div>

            </div>
        </>
    )
}
export default Counter