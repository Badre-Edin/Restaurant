import React, { useState } from 'react';
import axios from 'axios'

function Reservation() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState();
  const [table, setTable] = useState();
  const [time, setTime] = useState('');

  const onNameChange = function (event) {
    let text = event.target.value
    setUsername(text)
  }

  const onPhoneChange = function (event) {
    let number = event.target.value
    setPhone(number)
  }
  const onTableChange = function (event) {
    let table = event.target.value
    setTable(table)
  }
  const onTimeChange = function (event) {
    let time = event.target.value
    setTime(time)
  }
  const saveReservation=function(event){
    event.preventDefault()
    let userData={
      username,
      phone,
      table,
      time
    }
    axios.post('/test',userData)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
  }

  return (
    <form>
      <label >Name</label>
      <input type="text" onChange={onNameChange} /><br />
      <label>Phone Number</label>
      <input type="tel" onChange={onPhoneChange} /><br></br>
      <label >Tabe</label>
      <input type='table' onChange={onTableChange} /><br></br>
      <label >Time</label>
      <input type='time' onChange={onTimeChange} /><br></br>
      <button onClick={saveReservation} >Submit</button>
    </form>
  )
}

export default Reservation;