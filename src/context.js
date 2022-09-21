import React, { Component } from 'react';


const UserContext = React.createContext();
//Provider, Consumer
const reducer = (state, action) =>{
    switch(action.type){
        case "DELETE_USER":
        return{
            ...state,
            users: state.users.filter(user => action.payload !== user.id)
        }
        default:
            return state
    }
}

export class UserProvider extends Component {

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
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
    }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;