import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import Reservation from './Reservation.jsx';


function App() {
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle(toggle => !toggle);
  return (
     <div>
        {toggle && <HomePage /> }
        {!toggle && <Reservation /> }
        <button type="button" onClick={toggleChecked}>
           Toggle
        </button>
     </div>
  );
}
export default App;