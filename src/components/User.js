import { Component } from 'react'
import PropTypes from 'prop-types';
import UserConsumer from '../context';

class User extends Component {
  
  state = {
      isVisible: false
    }
  

  onClickEvent(e){
    this.setState ({
      isVisible: !this.state.isVisible
    })
  }

  onDeleteUser (dispatch, e) {
    const {id} = this.props;
    
    //consumer dispatch
    console.log("geldi")
    dispatch({type: "DELETE_USER", payload:id});
    console.log("geldi2")
  }

  render() {

    //Destructing
    const {name,department,salary} = this.props;
    const {isVisible} = this.state

    return(
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;

          return(
              <div className=' col-md-8 mb-4'>
                 <div className="card">
                   <div className="card-header d-flex justify-content-between">
                     <h4 className="d-inline" onClick={this.onClickEvent.bind(this)} >{name}</h4>
                     <i onClick={this.onDeleteUser.bind(this, dispatch)} className='far fa-trash-alt' style={{cursor: "pointer"}}></i>
                   </div>
                   {
                     isVisible ? <div className="card-body">
                     <p className="card-text">Departman: {department}</p>
                     <p className="card-text">Maas: {salary}</p>
                     <p>{this.state.test}</p>
                   </div> : null
                   }
                 </div>
                 
               </div>
            )
          }
        }
      </UserConsumer>
    )
    
  }
}
User.prototypes = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
}

User.defaultProps = { //burada da yazilabilir. Normalde alt kisimda yazilir.
  name : "Bilgi Yok",
  department : "Bilgi Yok",
  salary : "Bilgi Yok"
}

export default User;
