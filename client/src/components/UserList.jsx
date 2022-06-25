import React from "react";
import axios from "axios";
import UserDetails from "./UserDetails.jsx";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.deleteUser = this.deleteUser.bind(this);
  
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get("http://localhost:3000").then((result) => {
      this.setState({ users: result.data });
    });
  }


  render() {
    return (
      <div>
        <button onClick={this.fetchData.bind(this)}>Get All Users</button>
        <h1>we have {this.state.users.length} users in the database</h1>


        {this.state.users.map((user, index) => {
          return <UserDetails user={user} key={index} index={index} deleteUser={this.deleteUser} typing={this.typing} />;
        })}
      </div>
    );
  }
}
export default UserList;
