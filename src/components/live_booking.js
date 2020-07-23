import React ,{ useState, useEffect }from 'react';
import input from '../input.json'



  
function Live_booking() {

    const [data, setData] = useState(input)

    const days=(x,y)=>{
const x_date = new Date(x)
const y_date = new Date(y)
return y_date.getDate() - x_date.getDate()
    }

    return (
<div className="content" id="content" style={{position: "relative",left: "255px"}}>
    <h2 style={{position: "relative",left: "-380px"}}>Rates and Inventory <span className="lead">Live Booking</span></h2>
<div class="card m-2">
  <div class="card-body">
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Channel</th>
      <th scope="col">Booking ID</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Status</th>
      <th scope="col">Booked on</th>
      <th scope="col">Checkin</th>
      <th scope="col">Checkout</th>
      <th scope="col">Room</th>
      <th scope="col">Room Nights</th>
      <th scope="col"># of Rooms</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.channel}</td>
    <td>{data.bookingId}</td>
    <td>{data.booked_by.firstName+' ' + data.booked_by.lastName}</td>
    <td>{data.status}</td>
    <td>{data.booked_on}</td>
    <td>{data.check_in}</td>
    <td>{data.check_out}</td>
    <td>{data.rooms[0].name}</td>
    <td>{days(data.check_in,data.check_out)}</td>
    <td>2</td>
    <td>{data.total_payment}</td>
    

    </tr>
   
  </tbody>
</table>
</div></div>
</div>

    );
}

export default Live_booking;