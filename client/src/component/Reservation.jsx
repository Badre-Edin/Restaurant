import React from 'react';

const Reservation = (props) => (
  <form>
    <label >Name</label>
    <input type="text" name="fname"/><br></br>
    <label>Phone Number</label>
    <input type="tel"/><br></br>
    <label >Tabe</label>
    <input type='table'/><br></br>
    <label >Time</label>
    <input type='time'/>
  </form>
  
)

export default Reservation;