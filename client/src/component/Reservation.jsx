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
  const saveReservation = function (event) {
    event.preventDefault()
    let userData = {
      username,
      phone,
      table,
      time
    }
    axios.post('/test', userData)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  return (
    <section>
    <form className='form'>
      <label >Name</label><br />
      <input type="text" onChange={onNameChange} /><br />
      <label>Phone Number</label><br />
      <input type="tel" onChange={onPhoneChange} /><br></br>
      <label >Tabe</label><br />

      <select className='table' name="table" onChange={onTableChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select><br />

      {/*<input className='table' type='table' onChange={onTableChange} /><br></br>*/}
      <label >Time</label><br />
      <input type='time' onChange={onTimeChange} /><br></br>
      <button className='button' onClick={saveReservation} >Submit</button>
    </form>
    </section>
  )
}

export default Reservation;