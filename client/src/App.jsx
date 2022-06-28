import React, { useState } from 'react';
import HomePage from '../src/component/HomePage.jsx';
import AboutUs from '../src/component/AboutUs.jsx'
import Reservation from '../src/component/Reservation.jsx';
import MyReservation from './component/MyReservation.jsx';



function App() {
   const [showHome, setShowHome] = useState(true);
   const [showReservation, setShowReservation] = useState(false);
   const [showMyReservation, setShowMyReservation] = useState(false);
   const [showAboutUs, setShowAboutUs] = useState(false);


   

   const onHomeClick = function () {
      setShowHome(showHome => true)
      setShowReservation(showReservation => false)
      setShowMyReservation(showMyReservation => false)
      setShowAboutUs(showAboutUs => false)
   }
   const onReservationClick = function () {
      setShowHome(showHome => false)
      setShowReservation(showReservation => true)
      setShowMyReservation(showMyReservation => false)
      setShowAboutUs(showAboutUs => false)
   }
   const onMyReservationClick = function () {
      setShowHome(showHome => false)
      setShowReservation(showReservation => false)
      setShowMyReservation(showMyReservation => true)
      setShowAboutUs(showAboutUs => false)
   }
   const onAboutUsClick = function () {
      setShowHome(showHome => false)
      setShowReservation(showReservation => false)
      setShowMyReservation(showMyReservation => false)
      setShowAboutUs(showAboutUs => true)
   }

   return (
      <div>
         <div>
            <div onClick={onHomeClick}>Home</div>
            <div onClick={onReservationClick}>Reservation</div>
            <div onClick={onMyReservationClick}>My Reservation</div>
            <div onClick={onAboutUsClick}>AboutUs</div>
         </div>
         {showHome && <HomePage />}
         {showReservation && <Reservation />}
         {showMyReservation && <MyReservation />}
         {showAboutUs && <AboutUs />}

      </div>
   );
}
export default App;