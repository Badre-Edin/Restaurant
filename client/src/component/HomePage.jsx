import React from 'react';
//import './HomePage.css'



class HomePage extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false
  //   }
    
  // }
//   showReservation(){
//     console.log(this.show);
//     this.setState({
//         show : true
//     })
//     console.log(this.show);
//   }
  render() {
    return (
        <div className="home-page">
           <h1 className='home-logo'>Mediterranean Food</h1>
           <h4 className="home-description">
               Mediterranean cuisine is the food and preparation methods 
               <br/><br/>of people living in the Mediterranean Basin region.
               <br/><br/>At Mediterranean Food It so delicious.
           </h4>
        </div>
    ) 
  }
}

export default HomePage;
