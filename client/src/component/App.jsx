import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import AboutUs from './AboutUs.jsx'
import Reservation from './Reservation.jsx';
import axios from 'axios';


function App() {
   const [showHome, setShowHome] = useState(true);
   const [showReservation, setShowReservation] = useState(false);
   const [showAboutUs, setShowAboutUs] = useState(false);


   

   const onHomeClick = function () {
      setShowHome(showHome => true)
      setShowReservation(showReservation => false)
      setShowAboutUs(showAboutUs => false)
   }
   const onReservationClick = function () {
      setShowHome(showHome => false)
      setShowReservation(showReservation => true)
      setShowAboutUs(showAboutUs => false)
   }
   const onAboutUsClick = function () {
      setShowHome(showHome => false)
      setShowReservation(showReservation => false)
      setShowAboutUs(showAboutUs => true)
   }

   return (
      <div>
         <div>
            <div onClick={onHomeClick}>Home</div>
            <div onClick={onReservationClick}>Reservation</div>
            <div onClick={onAboutUsClick}>AboutUs</div>
         </div>
         {showHome && <HomePage />}
         {showReservation && <Reservation />}
         {showAboutUs && <AboutUs />}

      </div>
   );
}
export default App;