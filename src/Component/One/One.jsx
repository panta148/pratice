import React, { useState } from 'react';
import './style.css'

function Greeting() {
    const mystyle = {
        color: ''
    }
    const time = new Date().getHours();
    const ftime = new Date().toLocaleTimeString();
    const [clock, setclock] = useState(ftime)
    let greeting = ''
    function getAllTime() {
        const ftime = new Date().toLocaleTimeString();
        setclock(ftime)
    }
    if (time >= 1 && time < 12) {
        greeting = 'Good Morning'
        mystyle.color = 'blue'
    }
    else if (time >= 12 && time < 19) {
        greeting = 'Good AfterNoon'
        mystyle.color = 'black'

    }
    else {
        greeting = 'Good Night'
        mystyle.color = 'red'
    }
    setInterval(getAllTime, 1000)
    return (
        <div className='row'>
            <h4>{clock}</h4>
            <h3 className='main'>Hello , <span style={mystyle}>{greeting}</span></h3>
        </div>

    )
}
export default Greeting;