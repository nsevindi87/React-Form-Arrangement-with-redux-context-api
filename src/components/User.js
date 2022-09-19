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
      <div>
        <ul>
          <li>Isim: {name} <i className='far fa-trash-alt'></i> </li>
          <li>Departman: {department}</li>
          <li>Maas: {salary}</li>
        </ul>
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
