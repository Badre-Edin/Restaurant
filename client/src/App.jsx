import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList.jsx";
import Reservations from "./components/Reservation/Reservations"
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Reservations />
        <UserList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
