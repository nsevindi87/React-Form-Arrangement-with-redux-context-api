import { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";


class App extends Component{
  
  render(){
    return (
      <div className="container">
        <Navbar title="Employee information"/>
        <hr />
        <Users/>
      </div>
    );
  }
}

export default App;
