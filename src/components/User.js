import { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
  static defaultProps = { //burada da yazilabilir. Normalde alt kisimda yazilir.
    name : "Bilgi Yok",
    department : "Bilgi Yok",
    salary : "Bilgi Yok"
  }

  render() {

    //Destructing
    const {name,department,salary} = this.props;

    return (
      <div className=' col-md-8 mb-4'>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className='far fa-trash-alt' style={{cursor: "pointer"}}></i>
          </div>
          <div className="card-body">
            <p className="card-text">Departman: {department}</p>
            <p className="card-text">Maas: {salary}</p>
          </div>
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
