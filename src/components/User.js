import { Component } from 'react'
import PropTypes from 'prop-types'
import { isVisible } from '@testing-library/user-event/dist/utils';


class User extends Component {
  static defaultProps = { //burada da yazilabilir. Normalde alt kisimda yazilir.
    name : "Bilgi Yok",
    department : "Bilgi Yok",
    salary : "Bilgi Yok"
  }

  constructor(props){
    super(props);

    this.state = {
      isVisible: false
    }
  }

  onClickEvent(e){
    this.setState ({
      isVisible: !this.state.isVisible
    })
  }

  render() {

    //Destructing
    const {name,department,salary} = this.props;
    const {isVisible} = this.state

    return (
      <div className=' col-md-8 mb-4'>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)} >{name}</h4>
            <i className='far fa-trash-alt' style={{cursor: "pointer"}}></i>
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
User.prototypes = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired
}

export default User;
