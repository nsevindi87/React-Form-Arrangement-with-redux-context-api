import { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";


class App extends Component{
  state={
    users:[
      {
        id:1,
        name: "Haydar Sermez",
        salary: "5000",
        department: "Bilisim"
      },
      {
        id:2,
        name: "Selim Tarcan",
        salary: "4000",
        department: "Muhasebe"
      },
      {
        id:3,
        name: "Mehmet Kurt",
        salary: "6000",
        department: "Insan Kaynaklari"
      }
    ]
  }
  render(){
    return (
      <div className="container">
        <Navbar title="Employee information"/>
        <hr />
        <Users users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
