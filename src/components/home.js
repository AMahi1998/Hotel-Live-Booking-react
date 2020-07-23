import React from 'react';
import input from '../input.json'

function home() {
    return (
<div>
    <h1 className='display-4' style={{position:"relative",left:"125px"}}>Welcome to {input.hotel_name}</h1>
        <small style={{position:"relative",left:"125px"}}>CLICK ON RATES AND INVENTORY FOR LIVE BOOKING</small>
</div>

    );
}

export default home;