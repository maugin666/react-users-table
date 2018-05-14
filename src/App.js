import React, { Component } from 'react';

import Button from './Button';
import Popup from './Popup';
import UserRow from './UserRow';
import './App.css';

const users = [
  {id: 0, name: 'Вася', role: 'admin', phone: '555-55-55', age: 30},
  {id: 1, name: 'Петя', role: 'manager', phone: '777-77-77', age: 25},
  {id: 2, name: 'Максим', role: 'seller', phone: '888-88-88', age: 48},
  {id: 3, name: 'Егор', role: 'buyer', phone: '999-99-99', age: 22}
];

const buttons = {
  add: {
    className: 'button add',
    label: 'Add'
  },
  more: {
    className: 'button more',
    label: 'More'
  },
  edit: {
    className: 'button edit',
    label: 'Edit'
  },
  delete: {
    className: 'button delete',
    label: 'Delete'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: true,
    });
  }

  addUser = () => {
    const user = {
      id: users.length,
      name: '000',
      role: '0',
      phone: '000-00-00',
      age: 0
    };

    this.setState(() => (
      users.push(user)
    ));
  };

  render() {
    return (
      <div>
        <Button className={buttons.add.className} onClick={this.togglePopup} userId={null} text={buttons.add.label} />
        <table className="table">
          <thead className="table-head">
            <tr>
              <td>Name</td>
              <td>Role</td>
              <td>Phone</td>
              <td></td>
            </tr>
          </thead>
          <UserRow users={users}/>
        </table>
        {this.state.showPopup ? <Popup onClick={null} userId={null} title="Add User" /> : null}
      </div>
    );
  }
}

export default App;
